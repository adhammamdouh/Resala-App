import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss'],
})
export class TitleBarComponent implements OnInit {
  leftArrow = '../../assets/icon/arrows/left-arrow.svg'

  @Input() title: string = '';

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {}

  async goBack() {
    await this.navCtrl.pop();
  }

}
