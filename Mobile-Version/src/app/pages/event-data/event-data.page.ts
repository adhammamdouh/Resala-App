import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AssignCallsComponent } from 'src/app/components/assign-calls/assign-calls.component';
import { EventAttendanceComponent } from 'src/app/components/event-attendance/event-attendance.component';
import { PopoverItemProperties } from 'src/app/components/popover/popover-item-properties';
import { PopoverItemsType } from 'src/app/components/popover/popover-items-type.enum';
import ResalaEvent from 'src/app/domains/ResalaEvent/ResalaEvent';
import { EventCRUDService, EventStatus } from 'src/app/services/EventCRUD/event-crud.service';
import { PrivilegeHandlerService } from 'src/app/services/PrivilegeService/privilege-handler.service';
import { CallsPage } from '../calls/calls.page';
import * as service from 'src/app/data/services.json';
import { RestfulAPIHandlerService } from 'src/app/services/RestfulAPIHandler/restful-apihandler.service';
import { ToastHandlerService, ToastMode } from 'src/app/services/ToastHandler/toast-handler.service';
import { Response } from 'src/app/domains/response';
import { LoadingHandlerService } from 'src/app/services/LoadingHandler/loading-handler.service';

@Component({
  selector: 'app-event-data',
  templateUrl: './event-data.page.html',
  styleUrls: ['./event-data.page.scss'],
})
export class EventDataPage implements OnInit {
  callsModelOpened: boolean = false;
  popoverItemsProperties: PopoverItemProperties[];
  event: ResalaEvent;
  eventStatus = EventStatus;

  constructor(private modalController: ModalController,
              public privilegeHandler: PrivilegeHandlerService,
              private route: ActivatedRoute,
              private eventCRUD: EventCRUDService,
              private restfulAPI: RestfulAPIHandlerService,
              private navCtrl: NavController,
              private zone: NgZone,
              private toast: ToastHandlerService,
              private loading: LoadingHandlerService) { 

                this.route.queryParams.subscribe(params => {
                  this.event = JSON.parse(params["event"]);
                });
                
              }

  ngOnInit() {
    this.preparePopover();
  }

  async openCallsModal() {
    await this.openModal(CallsPage, {event: this.event});
  }

  async openAssignCallsModal() {
    await this.openModal(AssignCallsComponent, {event: this.event});
  }

  async openEventAttendanceModal() {
    await this.openModal(EventAttendanceComponent, {event: this.event})
  }

  onSelectPopoverItem(ev: PopoverItemProperties) {
    switch(ev.type) {
      case PopoverItemsType.edit:
        this.goToEventForm(ev);
        break;
      case PopoverItemsType.archive:
        this.archiveEvent();
        break;
      case PopoverItemsType.assignCalls:
        this.openAssignCallsModal();
        break;
      case PopoverItemsType.completeEvent:
        this.completeEvent();
        break;
      case PopoverItemsType.submitVolunteersAttendance:
        this.openEventAttendanceModal();
        break;
    }
  }

  private preparePopover() {
    if(this.event.eventStatus.id !== EventStatus.active) return;
    if(this.privilegeHandler.isArchiveEventValid()) {
      if(!this.popoverItemsProperties) this.popoverItemsProperties = []
      this.popoverItemsProperties.push({ name: 'POPOVER.archive',
                                         navigationPageName: '',
                                         navigationExtras: null,
                                         type: PopoverItemsType.archive});
    }
    if(this.privilegeHandler.isCompleteEventValid()) {
      if(!this.popoverItemsProperties) this.popoverItemsProperties = []
      this.popoverItemsProperties.push({ name: 'POPOVER.completeEvent', 
                                         navigationPageName: '',
                                         navigationExtras: null,
                                         type: PopoverItemsType.completeEvent});
    }
    if(this.privilegeHandler.isUpdateEventValid()) {
      if(!this.popoverItemsProperties) this.popoverItemsProperties = []
      this.popoverItemsProperties.push({ name: 'POPOVER.edit', 
                                         navigationPageName: 'event-form', 
                                         navigationExtras: {
                                          queryParams: {
                                            mode: JSON.stringify('edit'),
                                            event: JSON.stringify(this.event)
                                          }
                                          },
                                         type: PopoverItemsType.edit});
    }
    if(this.privilegeHandler.isAssignCallsValid()) {
      if(!this.popoverItemsProperties) this.popoverItemsProperties = []
      this.popoverItemsProperties.push({ name: 'POPOVER.assignCalls', 
                                         navigationPageName: '', 
                                         navigationExtras: null,
                                         type: PopoverItemsType.assignCalls})
    }
    if(this.privilegeHandler.isMakeVolunteerAttendance()) {
      if(!this.popoverItemsProperties) this.popoverItemsProperties = []
      this.popoverItemsProperties.push({ name: 'POPOVER.submitVolunteersAttendance', 
                                         navigationPageName: 'event-attendance', 
                                         navigationExtras: null,
                                         type: PopoverItemsType.submitVolunteersAttendance})
    }
  }

  private async openModal(component, componentProps = {}) {
    const modal = await this.modalController.create({
      component: component,
      componentProps: componentProps,
      cssClass: 'modalContainer',
      mode: 'ios',
      swipeToClose: true,
    });
    this.callsModelOpened = true;

    await modal.present();
  }

  async archiveEvent() {
    if(!this.privilegeHandler.isArchiveEventValid()) return;

    await this.loading.presentLoading();

    const url = service.baseUrl + '/event/archiveEvent';

    const res = await this.restfulAPI.post(url, { id: this.event.id });

    res.subscribe( 
      async (res: Response) => {
        this.toast.presentToast(res.message, ToastMode.success);
        this.eventCRUD.refresh().subscribe(async () => {
          await this.navBack();
          await this.loading.dismissLoading();
        }, async () => {
          await this.navBack();
          await this.loading.dismissLoading();
        })
      }, 
      async res => {
        this.toast.presentToast(res.error.error, ToastMode.success)
        await this.loading.dismissLoading();
      })
  }

  async completeEvent() {
    if(!this.privilegeHandler.isCompleteEventValid()) return;
    
    await this.loading.presentLoading();

    const url = service.baseUrl + '/event/completeEvent';

    const res = await this.restfulAPI.put(url, { id: this.event.id });

    res.subscribe( 
      async (res: Response) => {
        this.toast.presentToast(res.message, ToastMode.success);
        this.eventCRUD.refresh().subscribe(async () => {
          await this.navBack();
          await this.loading.dismissLoading();
        }, async () => {
          await this.navBack();
          await this.loading.dismissLoading();
        })
      }, 
      async res => {
        this.toast.presentToast(res.error.error, ToastMode.success)
        await this.loading.dismissLoading();
      })
  }

  async navBack() {
    await this.zone.run(async () => {
      await this.navCtrl.navigateBack(['home/events']);
    })
  }

  async goToEventForm(ev) {
    this.zone.run(async () => {
      await this.navCtrl.navigateForward([ev.navigationPageName], ev.navigationExtras);
    })
  }

}
