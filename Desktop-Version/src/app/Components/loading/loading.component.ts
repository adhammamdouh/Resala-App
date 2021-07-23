import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ErrorHandlerService } from 'src/app/Controllers/alertHandler/alert-handler.service';
import { AuthService } from 'src/app/Controllers/auth/auth.service';
import { EventsCRUDService } from 'src/app/Controllers/eventHandler/events-crud.service';
import { PrivilegeHandlerService } from 'src/app/Controllers/PrivilegeHandler/privilege-handler.service';
import { VolunteersCRUD } from 'src/app/Controllers/volunteerHandler/volunteers-handler.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor(private volunteersHandler:VolunteersCRUD, 
    private eventsHandler:EventsCRUDService, 
    private errorHandler:ErrorHandlerService, 
    private router:Router,
    private privilegeHandler:PrivilegeHandlerService,
    private authService:AuthService) { }
    callingAPI:any = [];
  ngOnInit(): void {
    this.privilegeHandler.fillRoles(this.authService.getUser().user.privileges);
    if (this.privilegeHandler.isGetByVolunteersStatusPrivilegeValid()){
      this.callingAPI.push(this.volunteersHandler.getVolunteersByState(1));
      this.callingAPI.push(this.volunteersHandler.getVolunteersByState(2));
      if (this.privilegeHandler.isShowRequestToArchiveValid()){
        this.callingAPI.push(this.volunteersHandler.getVolunteersByState(3));
      }
    }
    if (this.privilegeHandler.isGetByEventStatusPrivilegeValid()){
      this.callingAPI.push(this.eventsHandler.getAllEventsByState(1))
      this.callingAPI.push(this.eventsHandler.getAllEventsByState(3))
    }
    this.getAllRequiredData();
  }

  async getAllRequiredData(){
    forkJoin(this.callingAPI).subscribe(
      (a:any)=>{
        if (this.privilegeHandler.isGetByVolunteersStatusPrivilegeValid()){
          this.volunteersHandler.handleGetVolunteersByStateResponse(a[0], 1)
          this.volunteersHandler.handleGetVolunteersByStateResponse(a[1], 2)
          if (this.privilegeHandler.isShowRequestToArchiveValid()){
            this.volunteersHandler.handleGetVolunteersByStateResponse(a[2], 3)
          }
        }
        if (this.privilegeHandler.isGetByEventStatusPrivilegeValid()){
          this.eventsHandler.handleGetAllEventsByStateResponse(a[3], 1);
          this.eventsHandler.handleGetAllEventsByStateResponse(a[4], 3);
        }
        this.routeToMainPage();
      },
      (err:any)=>{
        this.errorHandler.handleError(err);
      }
    )
  }

  routeToMainPage(){
    this.router.navigate(['volunteers']) 
  }
}
