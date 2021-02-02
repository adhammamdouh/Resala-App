import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-normal-alert',
  templateUrl: './normal-alert.component.html',
  styleUrls: ['./normal-alert.component.scss']
})

export class NormalAlertComponent implements OnInit {
  @ViewChild('mainModel', {read: ElementRef}) mainModell: ElementRef;

  //@Input() alertType: string;

  constructor() { }

  ngOnInit(): void {
  }

  closeModel() {
    /*var myModel = new bootstrap.Modal(document.getElementById('normalModal'));
    debugger;
    console.log(this.mainModell.nativeElement.className);
    this.mainModell.nativeElement.className = this.mainModell.nativeElement.className.replace('show', '');
    myModel.hide();
    console.log(this.mainModell.nativeElement.className);
    //this.mainModell.nativeElement.style.Display*/
  }
}
