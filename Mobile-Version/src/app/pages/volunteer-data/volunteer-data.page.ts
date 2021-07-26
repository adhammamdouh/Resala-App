import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PopoverItemProperties } from 'src/app/components/popover/popover-item-properties';
import { PopoverItemsType } from 'src/app/components/popover/popover-items-type.enum';
import { accessRights, AccessRightsRolls, volunteerStatus } from 'src/app/data/general-data.enum';
import Volunteer from 'src/app/domains/Volunteer/Volunteer';
import { PrivilegeHandlerService } from 'src/app/services/PrivilegeService/privilege-handler.service';
import { RestfulAPIHandlerService } from 'src/app/services/RestfulAPIHandler/restful-apihandler.service';
import * as service from 'src/app/data/services.json';
import { ToastHandlerService, ToastMode } from 'src/app/services/ToastHandler/toast-handler.service';
import { LoadingHandlerService } from 'src/app/services/LoadingHandler/loading-handler.service';
import { Response } from 'src/app/domains/response';
import { VolunteerCRUDService } from 'src/app/services/VolunteerCRUD/volunteer-crud.service';

@Component({
  selector: 'app-volunteer-data',
  templateUrl: './volunteer-data.page.html',
  styleUrls: ['./volunteer-data.page.scss'],
})
export class VolunteerDataPage implements OnInit {
  accessRights = accessRights
  popoverItemsProperties: PopoverItemProperties[];
  volunteer: Volunteer
  constructor(private navCtrl: NavController,
              private zone: NgZone,
              private privilegeHandler: PrivilegeHandlerService,
              private route: ActivatedRoute,
              private resfulAPI: RestfulAPIHandlerService,
              private toast: ToastHandlerService,
              private loading: LoadingHandlerService,
              private volunteerCRUD: VolunteerCRUDService) {
                this.route.queryParams.subscribe(params => {
                  this.volunteer = JSON.parse(params["volunteer"]);
                  this.preparePopoverItems();
                });
               }

  ngOnInit() {
    
  }

  onSelectPopoverItem(ev: PopoverItemProperties) {
    switch(ev.type) {
      case PopoverItemsType.edit:
        this.zone.run(async () => {
          await this.navCtrl.navigateForward([ev.navigationPageName], ev.navigationExtras);
        })
        break;
      case PopoverItemsType.archive:
        this.requestToArchiveVolunteer(ev);
        break;
      case PopoverItemsType.acceptArchive:
        this.acceptToArchiveVolunteer(ev);
        break;
      case PopoverItemsType.declineArchive:
        this.declineToArchiveVolunteer(ev);
        break;
      case PopoverItemsType.activate:
        this.activateArchivedVolunteer(ev);
        break;
    }
    //console.log("volunteer", ev);
  }

  preparePopoverItems() {
    this.popoverItemsProperties = null;
    if(this.volunteer.volunteerStatus.id === volunteerStatus.requestedToArchive) {
      this.checkAcceptRight();
      this.checkDeclineRight();
    } else if (this.volunteer.volunteerStatus.id === volunteerStatus.inactive) {
      this.checkActivateRight();
    } else {
      this.checkArchiveRight()
    }
    this.checkEditRight();
  }

  checkEditRight() {
    if(this.privilegeHandler.roles[this.accessRights.ROLE_UPDATE_VOLUNTEER]) {
      if(!this.popoverItemsProperties) this.popoverItemsProperties = [];
      this.popoverItemsProperties.push({ name: 'POPOVER.edit', 
                                         navigationPageName: "volunteer-form",
                                         navigationExtras: {
                                            queryParams: {
                                              mode: JSON.stringify('edit'),
                                              volunteer: JSON.stringify(this.volunteer)
                                            }
                                          },
                                         type: PopoverItemsType.edit});
    }
  }

  checkArchiveRight() {
    if(this.privilegeHandler.roles[this.accessRights.ROLE_REQUEST_TO_ARCHIVE_VOLUNTEER]) {
      if(!this.popoverItemsProperties) this.popoverItemsProperties = [];
      this.popoverItemsProperties.push({ name: 'POPOVER.archive', 
                                         navigationPageName: 'home/volunteers',
                                         navigationExtras: {},
                                         type: PopoverItemsType.archive});
    }
  }
  
  checkAcceptRight() {
    if(this.privilegeHandler.roles[this.accessRights.ROLE_ACCEPT_TO_ARCHIVE_VOLUNTEER]) {
      if(!this.popoverItemsProperties) this.popoverItemsProperties = [];
      this.popoverItemsProperties.push({ name: 'POPOVER.acceptArchive', 
                                         navigationPageName: 'home/volunteers',
                                         navigationExtras: {},
                                         type: PopoverItemsType.acceptArchive});
    }
  }

  checkDeclineRight() {
    if(this.privilegeHandler.roles[this.accessRights.ROLE_DECLINE_TO_ARCHIVE_VOLUNTEER]) {
      if(!this.popoverItemsProperties) this.popoverItemsProperties = [];
      this.popoverItemsProperties.push({ name: 'POPOVER.declineArchive', 
                                         navigationPageName: 'home/volunteers',
                                         navigationExtras: {},
                                         type: PopoverItemsType.declineArchive});
    }
  }

  checkActivateRight() {
    if(this.privilegeHandler.roles[this.accessRights.ROLE_ACTIVATE_VOLUNTEER]) {
      if(!this.popoverItemsProperties) this.popoverItemsProperties = [];
      this.popoverItemsProperties.push({ name: 'POPOVER.activate', 
                                         navigationPageName: 'home/volunteers',
                                         navigationExtras: {},
                                         type: PopoverItemsType.activate});
    }
  }

  async requestToArchiveVolunteer(ev) {
    await this.loading.presentLoading();
    const res = this.volunteerCRUD.requestToArchiveVolunteer(this.volunteer.id);

    this.handleSubscribe(res, ev);

  }

  async acceptToArchiveVolunteer(ev) {
    await this.loading.presentLoading();
    const res = this.volunteerCRUD.acceptToArchiveVolunteer(this.volunteer.id);

    this.handleSubscribe(res, ev);

  }

  async declineToArchiveVolunteer(ev) {
    await this.loading.presentLoading();
    const res = this.volunteerCRUD.declineToArchiveVolunteer(this.volunteer.id);

    this.handleSubscribe(res, ev);
  }

  async activateArchivedVolunteer(ev) {
    await this.loading.presentLoading();
    const res = this.volunteerCRUD.activateVolunteer(this.volunteer.id);

    this.handleSubscribe(res, ev);
  }

  async handleSubscribe(res, ev) {
    res.subscribe( 
    async (res: Response) => {
      this.toast.presentToast(res.message, ToastMode.success);
      this.volunteerCRUD.refresh().subscribe(async () => {
        await this.navBack(ev);
        await this.loading.dismissLoading();
      }, async () => {
        await this.navBack(ev);
        await this.loading.dismissLoading();
      })
    }, 
    async res => {
      this.toast.presentToast(res.error.error, ToastMode.success)
      await this.loading.dismissLoading();
    })
  }

  async navBack(ev) {
    await this.zone.run(async () => {
      await this.navCtrl.navigateBack([ev.navigationPageName], ev.navigationExtras);
    })
  }
}
