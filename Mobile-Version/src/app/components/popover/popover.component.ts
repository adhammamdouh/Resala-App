import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverItemProperties } from './popover-item-properties';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  @Input() popoverItemsProperties: PopoverItemProperties[];
  constructor(private router: Router,
              private popover: PopoverController) { }

  ngOnInit() {}

  async dismissPopover(item) {
    await this.popover.dismiss({ clickedItem: item });
    // this.router.navigate([navigationPageName]);
  }

}
