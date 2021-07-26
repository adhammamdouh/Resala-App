import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InputProperties } from 'src/app/components/input/input-properties';
import { Response } from 'src/app/domains/response';
import Volunteer from 'src/app/domains/Volunteer/Volunteer';
import { LoadingHandlerService } from 'src/app/services/LoadingHandler/loading-handler.service';
import { ToastHandlerService, ToastMode } from 'src/app/services/ToastHandler/toast-handler.service';
import { VolunteerCRUDService } from 'src/app/services/VolunteerCRUD/volunteer-crud.service';
import { VolunteerForm } from './volunteer-form';

@Component({
  selector: 'app-volunteer-form',
  templateUrl: './volunteer-form.page.html',
  styleUrls: ['./volunteer-form.page.scss'],
})
export class VolunteerFormPage implements OnInit {
  volunteerFormAtt: VolunteerForm;
  isAddForm: boolean = true;
  mode: string;
  volunteer: Volunteer;

  constructor(private volunteerCRUD: VolunteerCRUDService,
              private route: ActivatedRoute,
              private toast: ToastHandlerService,
              private loading: LoadingHandlerService,
              private router: Router) { 
    this.route.queryParams.subscribe(params => {
      this.mode = JSON.parse(params["mode"]);
      if(this.mode === 'edit') {
        this.volunteer = JSON.parse(params["volunteer"]);
        this.volunteerFormAtt = new VolunteerForm(this.volunteer);
      } else {
        this.volunteerFormAtt = new VolunteerForm();
      }
    });
  }

  ngOnInit() {
  }

  async addVolunteer() {
    await this.loading.presentLoading();
    const res = await this.volunteerCRUD.createVolunteer(this.volunteerFormAtt.volunteerForm);
    res.subscribe(
    async (res: Response) => {
      await this.toast.presentToast(res.message, ToastMode.success);

      this.volunteerCRUD.refresh().subscribe(async () => {
        await this.router.navigateByUrl('home/volunteers');
        await this.loading.dismissLoading();
      })
    },
    async (res: Response) => {
      await this.loading.dismissLoading();
      await this.toast.presentToast(res.error.error[0].value, ToastMode.fail);
    })
  }

  async editVolunteer() {
    this.volunteerFormAtt.updateVolunteerData(this.volunteer);
    await this.loading.presentLoading();
    this.volunteerCRUD.updateVolunteer(this.volunteer).subscribe(async (res: Response) => {
      await this.toast.presentToast(res.message, ToastMode.success);

      this.volunteerCRUD.refresh().subscribe(async () => {
        await this.router.navigateByUrl('home/volunteers');
        await this.loading.dismissLoading();
      })
    }, async (res) => {
      await this.loading.dismissLoading();
      await this.toast.presentToast(res.error.error, ToastMode.fail);
    })
  }

}
