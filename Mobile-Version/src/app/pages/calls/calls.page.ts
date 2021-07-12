import { Component, OnInit } from '@angular/core';
import { CallProperties } from 'src/app/components/call-card/call-properties';
import { CallStatus } from 'src/app/components/call-card/call-status.enum';
import { CallType } from 'src/app/components/call-card/call-type.enum';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
})
export class CallsPage implements OnInit {
  start = 0;
  end = 20;

  callProperties: CallProperties[] = []
  tempCallProperties: CallProperties[] = []
  constructor() { 
    
  }

  ngOnInit() {
    for(let i = 0 ; i < 300 ; ++i) {
      this.tempCallProperties.push({callType: CallType.invitation, status: CallStatus.active, id: i});
      if(i < this.end)
        this.callProperties.push({callType: CallType.invitation, status: CallStatus.active, id: i});
    }
  }

  headerClicked() {
    console.log('header Clicked')
    //this.clipboard.copy('checking copying feature');
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      this.appendCalls(10);
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.callProperties.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  appendCalls(count) {
    this.start = this.end;
    this.end = this.end + count;

    for(let i = this.start; i < this.end ; ++i) {
      this.callProperties.push(this.tempCallProperties[i]);
    }
  }

}
