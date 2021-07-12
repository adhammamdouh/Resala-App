import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverItemProperties } from 'src/app/components/popover/popover-item-properties';
import { PopoverItemsType } from 'src/app/components/popover/popover-items-type.enum';

@Component({
  selector: 'app-volunteer-data',
  templateUrl: './volunteer-data.page.html',
  styleUrls: ['./volunteer-data.page.scss'],
})
export class VolunteerDataPage implements OnInit {
  popoverItemsProperties: PopoverItemProperties[] = [{ name: 'POPOVER.edit', navigationPageName: 'volunteer-form', type: PopoverItemsType.edit},
                                                     { name: 'POPOVER.archive', navigationPageName: '', type: PopoverItemsType.archive}]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelectPopoverItem(ev: PopoverItemProperties) {
    console.log("volunteer", ev);
    this.router.navigate([ev.navigationPageName]);
  }
}
