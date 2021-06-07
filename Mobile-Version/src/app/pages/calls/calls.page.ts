import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
})
export class CallsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  headerClicked() {
    console.log('header Clicked')
    //this.clipboard.copy('checking copying feature');
  }

}
