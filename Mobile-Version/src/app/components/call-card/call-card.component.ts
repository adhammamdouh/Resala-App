import { Component, OnInit } from '@angular/core';
import { AlertHandlerService } from 'src/app/services/AlertHandlerService/alert-handler.service';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-call-card',
  templateUrl: './call-card.component.html',
  styleUrls: ['./call-card.component.scss'],
})
export class CallCardComponent implements OnInit {
  showLoading: boolean = false;
  constructor(private alertHandler: AlertHandlerService,
              private callNumber: CallNumber) { }

  ngOnInit() {}
  goToCallsDialog() {
    this.callNumber.callNumber("01100024081", true)
    .then(res => this.alertHandler.displayAlert("yes"))
    .catch(err => this.alertHandler.displayAlert("no"));
  }
}
