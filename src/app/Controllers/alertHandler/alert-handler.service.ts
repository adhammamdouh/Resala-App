import { Injectable } from '@angular/core';
import { AlertButton } from 'src/app/Components/shared/normal-alert/alert-button';
import { AlertType } from 'src/app/Enums/alert-type.enum';
import { AlertService } from 'src/app/Services/alert.service';

@Injectable({
  providedIn: 'root'
})
export class AlertHandlerService {
  private alertType = AlertType.error;
  private alertMessage = "برجاء التأكد من اسم المستخدم و كلمة السر"
  private Buttons: AlertButton[] =
    [
      {
        name: 'btn1',
        handler: function (){ console.log('333') }
      },
      {
        name: 'btn2',
        handler: function (){ console.log('333') }
      }
    ]
  constructor(private alertService: AlertService) { }

  handleError(error) {
    this.alertService.showModal('test', AlertType.warning, this.Buttons);
    //console.log(error);
    //this.
    /*let gg = document.getElementById('dynamic-html');
    gg.innerHTML = '<app-normal-alert [alertType]="' + this.alertType + '" [alertBody]="' + this.alertMessage + '"></app-normal-alert>'
    /*document.getElementById('app-root').innerHTML.concat(
    '<app-normal-alert [alertType]="' + this.alertType + '" [alertBody]="' + this.alertMessage + '"></app-normal-alert>')*
    console.log(gg);
    //alert.show();*/
  }
}
