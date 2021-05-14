import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CallsPage } from '../calls/calls.page';

@Component({
  selector: 'app-event-data',
  templateUrl: './event-data.page.html',
  styleUrls: ['./event-data.page.scss'],
})
export class EventDataPage implements OnInit {
  callsModelOpened: boolean = false;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async openCallsModel() {
    console.log('swap')
    const modal = await this.modalController.create({
      component: CallsPage,
      cssClass: 'my-custom-class',
      mode: 'ios',
      swipeToClose: true,
      /*componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }*/
      
    });
    this.callsModelOpened = true;
    await modal.present();

    await modal.onDidDismiss().then(() => {
      this.callsModelOpened = false;
      console.log('dimiss', this.callsModelOpened);
    })
  }

}
