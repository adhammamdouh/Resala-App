import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertHandlerService {

  constructor(private alertCtrl: AlertController) { }

  async displayAlert(s) {
    const alert = await this.alertCtrl.create({
      cssClass: 'alertContainer',
      header: 'Alert',
      mode: 'ios',
      subHeader: s,
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
