import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopoverItemProperties } from 'src/app/components/popover/popover-item-properties';
import { PopoverItemsType } from 'src/app/components/popover/popover-items-type.enum';
import { PrivilegeHandlerService } from 'src/app/services/PrivilegeService/privilege-handler.service';
import { CallsPage } from '../calls/calls.page';

@Component({
  selector: 'app-event-data',
  templateUrl: './event-data.page.html',
  styleUrls: ['./event-data.page.scss'],
})
export class EventDataPage implements OnInit {
  callsModelOpened: boolean = false;
  popoverItemsProperties: PopoverItemProperties[];
  constructor(private modalController: ModalController,
              public privilegeHandler: PrivilegeHandlerService) { }

  ngOnInit() {
    this.preparePopover();
  }

  /*ROLE_ARCHIVE_EVENT, 
  ROLE_COMPLETE_EVENT,
  ROLE_UPDATE_EVENT,
  ROLE_GET_ASSIGNED_CALLS,    
  ROLE_SUBMIT_ASSIGNED_CALLS, 
  ROLE_ASSIGN_CALLS*/

  async openCallsModel() {
    console.log('swap')
    const modal = await this.modalController.create({
      component: CallsPage,
      cssClass: 'modalContainer',
      mode: 'ios',
      swipeToClose: true,
    });
    this.callsModelOpened = true;

    await modal.present();

    await modal.onDidDismiss().then(() => {
      this.callsModelOpened = false;
    })
  }

  onSelectPopoverItem(ev) {
    switch(ev) {
      case PopoverItemsType.edit:

        break;
      case PopoverItemsType.archive:

        break;
      case PopoverItemsType.assignCalls:

        break;
    }
  }

  preparePopover() {
    if(this.privilegeHandler.isArchiveEventValid()) {
      if(!this.popoverItemsProperties) this.popoverItemsProperties = []
      this.popoverItemsProperties.push({ name: 'POPOVER.archive', navigationPageName: '', type: PopoverItemsType.archive});
    }
    if(this.privilegeHandler.isCompleteEventValid()) {
      if(!this.popoverItemsProperties) this.popoverItemsProperties = []
      this.popoverItemsProperties.push({ name: 'POPOVER.completeEvent', navigationPageName: '', type: PopoverItemsType.archive});
    }
    if(this.privilegeHandler.isUpdateEventValid()) {
      if(!this.popoverItemsProperties) this.popoverItemsProperties = []
      this.popoverItemsProperties.push({ name: 'POPOVER.edit', navigationPageName: '', type: PopoverItemsType.edit});
    }
    if(this.privilegeHandler.isAssignCallsValid()) {
      if(!this.popoverItemsProperties) this.popoverItemsProperties = []
      this.popoverItemsProperties.push({ name: 'POPOVER.assignCalls', navigationPageName: '', type: PopoverItemsType.assignCalls})
    }
  }

}
