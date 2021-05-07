import { Injectable } from '@angular/core';
import { AlertButton } from 'src/app/Components/shared/normal-alert/alert-button';
import { AlertType } from 'src/app/Enums/alert-type.enum';
import { StatusCode } from 'src/app/Enums/status-code.enum';
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
    const btns = this.getErrorButtons(error.statues);

    this.alertService.showModal(error.error,
      AlertType.error,
      btns );
  }

  getErrorButtons(code) {
    switch(code) {
      case StatusCode.notFound:
        return [{name: 'موافق', handler: function (){ console.log('button clicked')}}]
      case StatusCode.success:
        return [{name: 'موافق', handler: function (){ console.log('button clicked')}}]
    }
  }
}
