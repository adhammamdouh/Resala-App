import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CallProperties } from 'src/app/components/call-card/call-properties';
import { CallStatus } from 'src/app/components/call-card/call-status.enum';
import Calls from 'src/app/domains/Call/Calls';
import ResalaEvent from 'src/app/domains/ResalaEvent/ResalaEvent';
import { Response } from 'src/app/domains/response';
import { AuthService } from 'src/app/services/AuthService/auth.service';
import { CallsCRUDService } from 'src/app/services/CallsCRUD/calls-crud.service';
import { LoadingHandlerService } from 'src/app/services/LoadingHandler/loading-handler.service';
import { ToastHandlerService, ToastMode } from 'src/app/services/ToastHandler/toast-handler.service';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
})
export class CallsPage implements OnInit {
  @Input() event: ResalaEvent;
  start = 0;
  end = 20;

  callProperties: Calls[] = []
  tempCallProperties: CallProperties[] = []
  constructor(public callsCRUD: CallsCRUDService,
              private auth: AuthService,
              private toast: ToastHandlerService,
              private modalCtrl: ModalController,
              private loading: LoadingHandlerService) { 
    
  }

  async ngOnInit() {
    await this.getCalls();
  }

  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      this.appendCalls(10);

      if (this.callProperties.length == this.callsCRUD.calls.length) {
        event.target.disabled = true;
      }
    }, 100);
  }

  appendCalls(count) {
    this.start = this.end > this.callsCRUD.calls.length ? this.callsCRUD.calls.length : this.end;
    this.end = (this.end + count > this.callsCRUD.calls.length) ? this.callsCRUD.calls.length : this.end + count;

    for(let i = this.start; i < this.end ; ++i) {
      this.callProperties.push(this.callsCRUD.calls[i]);
    }
  }

  trackItems(index: number, itemObject: any) {
    return itemObject.id;
  }

  async getCalls() {
    await this.loading.presentLoading();

    this.callsCRUD.getCalls(this.event.id, this.auth.getUser().volunteer_id).subscribe(
      async (res) => {
      this.callProperties = res;
      await this.loading.dismissLoading();
    }, async (res) => {
      await this.toast.presentToast(res.error.error, ToastMode.fail);
      await this.modalCtrl.dismiss();
      await this.loading.dismissLoading();
    });
  }

  refreshCalls(ev) {
    this.callsCRUD.refresh(this.event.id, this.auth.getUser().volunteer_id).subscribe((res) => {
      this.callProperties = res;
      ev.target.complete();
    }, () => {ev.target.complete();})
  }
}
