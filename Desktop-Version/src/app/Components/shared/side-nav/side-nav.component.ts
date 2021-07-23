import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/Controllers/alertHandler/alert-handler.service';
import *  as  FrontEndErrors from '../../../SharedData/FrontEndErrors.json'; 
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private errorHandler:ErrorHandlerService) { }

  ngOnInit(): void {
  }

  logout(){
    this.errorHandler.handleError(FrontEndErrors.logoutWarning);
  }

}
