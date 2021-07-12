import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, PopoverController } from '@ionic/angular';
import { PopoverItemProperties } from '../popover/popover-item-properties';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss'],
})
export class TitleBarComponent implements OnInit {
  leftArrow = '../../assets/icon/arrows/left-arrow.svg'
  
  @Input() title: string = '';
  @Input() showBackIcon: boolean = false;
  @Input() popoverItemsProperties: PopoverItemProperties[];

  @Output() onSelectPopoverItem: EventEmitter<PopoverItemProperties> = new EventEmitter();

  constructor(private navCtrl: NavController,
              private popoverController: PopoverController) { }

  ngOnInit() {}

  async goBack() {
    await this.navCtrl.pop();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: { popoverItemsProperties: this.popoverItemsProperties },
      cssClass: 'popoverContainer',
      event: ev,
      translucent: true,
      mode: 'ios'
    });
    await popover.present();

    await popover.onDidDismiss().then((msg) => {
      if(msg.data) {
        this.onSelectPopoverItem.emit(msg.data.clickedItem);
      }
    })
  }

}
