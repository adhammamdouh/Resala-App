import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverItemProperties } from 'src/app/components/popover/popover-item-properties';
import { PopoverItemsType } from 'src/app/components/popover/popover-items-type.enum';
import { accessRights, AccessRightsRolls } from 'src/app/data/general-data.enum';
import { PrivilegeHandlerService } from 'src/app/services/PrivilegeService/privilege-handler.service';

@Component({
  selector: 'app-volunteer-data',
  templateUrl: './volunteer-data.page.html',
  styleUrls: ['./volunteer-data.page.scss'],
})
export class VolunteerDataPage implements OnInit {
  accessRights = accessRights
  popoverItemsProperties: PopoverItemProperties[];

  constructor(private router: Router,
              private privilegeHandler: PrivilegeHandlerService) { }

  ngOnInit() {
    this.checkEditRight();
    this.checkArchiveRight()
  }

  onSelectPopoverItem(ev: PopoverItemProperties) {
    console.log("volunteer", ev);
    this.router.navigate([ev.navigationPageName]);
  }

  checkEditRight() {
    if(this.privilegeHandler.roles[this.accessRights.ROLE_UPDATE_VOLUNTEER]) {
      if(!this.popoverItemsProperties) this.popoverItemsProperties = [];
      this.popoverItemsProperties.push({ name: 'POPOVER.edit', navigationPageName: 'volunteer-form', type: PopoverItemsType.edit});
    }
  }

  checkArchiveRight() {
    if(this.privilegeHandler.roles[this.accessRights.ROLE_REQUEST_TO_ARCHIVE_VOLUNTEER]) {
      if(!this.popoverItemsProperties) this.popoverItemsProperties = [];
      this.popoverItemsProperties.push({ name: 'POPOVER.archive', navigationPageName: '', type: PopoverItemsType.archive});
    }
  }
}
