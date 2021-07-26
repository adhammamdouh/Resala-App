import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { accessRights } from 'src/app/data/general-data.enum';
import ResalaEvent from 'src/app/domains/ResalaEvent/ResalaEvent';
import { EventCRUDService } from 'src/app/services/EventCRUD/event-crud.service';
import { PrivilegeHandlerService } from 'src/app/services/PrivilegeService/privilege-handler.service';
import { RestfulAPIHandlerService } from 'src/app/services/RestfulAPIHandler/restful-apihandler.service';
import { EventForm } from './event-form';
import * as service from 'src/app/data/services.json';
import { ToastHandlerService, ToastMode } from 'src/app/services/ToastHandler/toast-handler.service';
import { NavController } from '@ionic/angular';
import { Response } from 'src/app/domains/response';
import { LoadingHandlerService } from 'src/app/services/LoadingHandler/loading-handler.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.page.html',
  styleUrls: ['./event-form.page.scss'],
})
export class EventFormPage implements OnInit {
  eventFormAtt: EventForm;
  mode: string = 'add';
  event: ResalaEvent;

  constructor(private privilegeHandler: PrivilegeHandlerService,
              private route: ActivatedRoute,
              private restfulAPI: RestfulAPIHandlerService,
              private eventCRUD: EventCRUDService,
              private toast: ToastHandlerService,
              private navCtrl: NavController,
              private router: Router,
              private laoding: LoadingHandlerService,) { 
    this.route.queryParams.subscribe(params => {
      this.mode = JSON.parse(params["mode"]);
      if(this.mode === 'edit') {
        this.event = JSON.parse(params["event"]);
        this.eventFormAtt = new EventForm(this.event);
      } else {
        this.eventFormAtt = new EventForm();
      }
    });
  }

  ngOnInit() {
  }

  async addEvent() {
    await this.laoding.presentLoading();
    const event: ResalaEvent = this.eventFormAtt.getEventObj();
    const res = await this.restfulAPI.post(service.baseUrl + 'event/addEvent', [event]);

    res.subscribe(async (res: Response) => {
      await this.toast.presentToast(res.message, ToastMode.success);
      
      this.eventCRUD.refresh().subscribe(async () => {
        await this.router.navigateByUrl('home/events');
        await this.laoding.dismissLoading();
      })

    }, async (res: Response) => {
      await this.laoding.dismissLoading();
      await this.toast.presentToast(res.error.error, ToastMode.fail);
    })
  }

  async editEvent() {
    await this.laoding.presentLoading();
    const event: ResalaEvent = this.eventFormAtt.updateEventData(this.event);

    const res = await this.restfulAPI.put(service.baseUrl + 'event/updateEvent', event);

    res.subscribe(async (res: Response) => {
      await this.toast.presentToast(res.message, ToastMode.success);
      
      this.eventCRUD.refresh().subscribe(async () => {
        await this.router.navigateByUrl('home/events');
        await this.laoding.dismissLoading();
      })

    }, async (res: Response) => {
      await this.laoding.dismissLoading();
      await this.toast.presentToast(res.error.error, ToastMode.fail);
    })
  }
}
