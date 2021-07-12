import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopoverItemProperties } from 'src/app/components/popover/popover-item-properties';
import { PopoverItemsType } from 'src/app/components/popover/popover-items-type.enum';
import { CallsPage } from '../calls/calls.page';

@Component({
  selector: 'app-event-data',
  templateUrl: './event-data.page.html',
  styleUrls: ['./event-data.page.scss'],
})
export class EventDataPage implements OnInit {
  callsModelOpened: boolean = false;
  popoverItemsProperties: PopoverItemProperties[] = [{ name: 'POPOVER.edit', navigationPageName: '', type: PopoverItemsType.edit},
                                                     { name: 'POPOVER.assignCalls', navigationPageName: '', type: PopoverItemsType.assignCalls},
                                                     { name: 'POPOVER.archive', navigationPageName: '', type: PopoverItemsType.archive}]
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

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

}
