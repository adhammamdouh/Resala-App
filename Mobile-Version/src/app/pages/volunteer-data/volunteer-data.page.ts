import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PopoverItemProperties } from 'src/app/components/popover/popover-item-properties';
import { PopoverItemsType } from 'src/app/components/popover/popover-items-type.enum';
import { accessRights, AccessRightsRolls } from 'src/app/data/general-data.enum';
import Volunteer from 'src/app/domains/Volunteer/Volunteer';
import { PrivilegeHandlerService } from 'src/app/services/PrivilegeService/privilege-handler.service';

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
              private route: ActivatedRoute) {
                this.route.queryParams.subscribe(params => {
                  this.volunteer = JSON.parse(params["volunteer"]);
                });
               }

  ngOnInit() {
    this.checkEditRight();
    this.checkArchiveRight()
  }

  onSelectPopoverItem(ev: PopoverItemProperties) {
    console.log("volunteer", ev);

    this.zone.run(async () => {
      await this.navCtrl.navigateForward(['volunteer-form'], ev.navigationExtras);
    })
  }

  checkEditRight() {
    if(this.privilegeHandler.roles[this.accessRights.ROLE_UPDATE_VOLUNTEER]) {
      if(!this.popoverItemsProperties) this.popoverItemsProperties = [];
      this.popoverItemsProperties.push({ name: 'POPOVER.edit', 
                                         navigationPageName: "volunteer-form?mode='edit'",
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
                                         navigationPageName: '',
                                         navigationExtras: null,
                                         type: PopoverItemsType.archive});
    }
  }
}
