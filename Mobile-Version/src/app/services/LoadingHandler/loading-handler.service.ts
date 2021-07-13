import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingHandlerService {
  private loading;

  constructor(private loadingController: LoadingController,
              private translate: TranslateService) { }

  async presentLoading() {
    const loadingMessage = this.translate.instant('LOADING.message');

    this.loading = await this.loadingController.create({
      cssClass: 'loadingContainer',
      message: loadingMessage,
      mode: 'ios',
      spinner: 'circular'
    });
    await this.loading.present();
  }

  async dismissLoading() {
    this.loading.dismiss();
  }
}
