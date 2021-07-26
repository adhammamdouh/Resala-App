import { Injectable, OnInit } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { ToastController } from '@ionic/angular';
import { AudioService } from '../Audio/audio.service';

export enum ToastMode {
  success = 1,
  fail = 2,
  message = 3
}

@Injectable({
  providedIn: 'root'
})
export class ToastHandlerService implements OnInit{
  private toast;
  constructor(private toastController: ToastController,
              private audio: AudioService) { }

  ngOnInit() {
  }

  async presentToast(message, mode: ToastMode) {
    const toast = await this.toastController.create({
      message: message,
      cssClass: 'toastContainer ' + this.getModeClass(mode),
      duration: mode === ToastMode.fail ? 2000 : 1000,
      mode: 'ios'
    });

    this.audio.play('message');
    await toast.present();
  }

  getModeClass(mode: ToastMode) {
    switch(mode) {
      case ToastMode.success:
        return 'toastSuccess';
      case ToastMode.fail:
        return 'toastFail';
      case ToastMode.message:
        return 'toastMessage';
    }
  }
}
