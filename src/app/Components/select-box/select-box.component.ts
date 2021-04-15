import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent implements OnInit {
  open: Boolean = false;
  inside: boolean = false;
  constructor() { }
  @HostListener("click")
  clicked() {
    this.inside = true;
  }
  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
    this.inside ? '' : this.closeList();
    this.inside = false;
  }
  ngOnInit(): void {
    this.openList();
  }

  openList() {
    this.open = true;
  }

  closeList() {
    this.open = false;
  }

}
