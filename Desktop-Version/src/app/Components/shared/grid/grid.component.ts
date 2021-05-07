import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  statesText = ["نشط", "طلب ارشيف", "غير نشط"];
  constructor() { }
  
  ngOnInit(): void {
  }

  onSwitchingState(state){
    switch (state) {
      case 0:
        this.firstState();
        break;
      case 1:
        this.secondState();
        break;
      case 2:
        this.thirdState();
        break;
      default:
        break;
    }
  }

  firstState(){
    ///TODO
  }

  secondState(){
    ///TODO
  }

  thirdState(){
    //TODO
  }
}
