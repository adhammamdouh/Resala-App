import { Injectable } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  showModal(){
    var myModal = new bootstrap.Modal(document.getElementById('normalModal'));
    myModal.show();
  }

  closeModal(){
    var myModal = new bootstrap.Modal(document.getElementById('normalModal'));
    myModal.hide();
  }
  
}
