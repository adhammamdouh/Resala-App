import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AssignCallsComponent } from 'src/app/components/assign-calls/assign-calls.component';
import { EventAttendanceComponent } from 'src/app/components/event-attendance/event-attendance.component';
import { PopoverItemProperties } from 'src/app/components/popover/popover-item-properties';
import { PopoverItemsType } from 'src/app/components/popover/popover-items-type.enum';
import ResalaEvent from 'src/app/domains/ResalaEvent/ResalaEvent';
import { EventCRUDService } from 'src/app/services/EventCRUD/event-crud.service';
import { PrivilegeHandlerService } from 'src/app/services/PrivilegeService/privilege-handler.service';
import { CallsPage } from '../calls/calls.page';
import * as service from 'src/app/data/services.json';
import { RestfulAPIHandlerService } from 'src/app/services/RestfulAPIHandler/restful-apihandler.service';

@Component({
  selector: 'app-event-data',
  templateUrl: './event-data.page.html',
  styleUrls: ['./event-data.page.scss'],
})
export class EventDataPage implements OnInit {
  callsModelOpened: boolean = false;
  popoverItemsProperties: PopoverItemProperties[];
  event: ResalaEvent;
  constructor(private modalController: ModalController,
              public privilegeHandler: PrivilegeHandlerService,
              private route: ActivatedRoute,
              private eventCRUD: EventCRUDService,
              private restfulAPI: RestfulAPIHandlerService) { 

                this.route.queryParams.subscribe(params => {
                  this.event = JSON.parse(params["event"]);
                });
                
              }

  ngOnInit() {
    this.preparePopover();
  }

  async openCallsModal() {
    await this.openModal(CallsPage);
  }

  async openAssignCallsModal() {
    await this.openModal(AssignCallsComponent);
  }

  async openEventAttendanceModal() {
    await this.openModal(EventAttendanceComponent)
  }

  onSelectPopoverItem(ev: PopoverItemProperties) {
    switch(ev.type) {
      case PopoverItemsType.edit:

        break;
      case PopoverItemsType.archive:
        this.archiveEvent();
        break;
      case PopoverItemsType.assignCalls:
        this.openAssignCallsModal();
        break;
      case PopoverItemsType.completeEvent:

        break;
      case PopoverItemsType.submitVolunteersAttendance:
        this.openEventAttendanceModal();
        break;
    }
  }

  private preparePopover() {
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
                                         navigationPageName: '', 
                                         navigationExtras: null,
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

  private async openModal(page) {
    const modal = await this.modalController.create({
      component: page,
      cssClass: 'modalContainer',
      mode: 'ios',
      swipeToClose: true,
    });
    this.callsModelOpened = true;

    await modal.present();
  }

  async archiveEvent() {
    if(!this.privilegeHandler.isArchiveEventValid()) return;
    console.log('after')
    const url = service.baseUrl + '/event/archiveEvent';

    const res = await this.restfulAPI.post(url, { id: this.event.id });

    res.subscribe((res) => {console.log(res)}, (res) => {console.log(res)});
  }

}
