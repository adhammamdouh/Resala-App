import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from './services/AuthService/auth.service';
import { LanguageService } from './services/LanguageService/language.service';
import * as keys from 'src/app/data/keys.json';
import { MenuController, NavController, ViewWillEnter } from '@ionic/angular';
import { ToastMode } from './services/ToastHandler/toast-handler.service';
import { AudioService } from './services/Audio/audio.service';
import User from './domains/User';
import { branches, options } from './data/general-data.enum';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  user: User = null;
  branches = options.branches;
  constructor(private langService: LanguageService,
              public auth: AuthService,
              private storage: Storage,
              private navCtrl: NavController,
              private menuCtrl: MenuController,
              private audio: AudioService) {
                console.log(this.auth.getUser(), 'usereeee')
                this.user = this.auth.getUser();
              }
  
  async ngOnInit() {            
    await this.initializeApp();
  }

  ngAfterViewInit() {
    console.log(this.user);
  }

  async initializeApp() {
    this.langService.setInitialAppLanguage('ar');
    await this.storage.create();

    //this.audio.preload(ToastMode[ToastMode.fail], 'assets/soundEffects/' + ToastMode[ToastMode.fail] + '.mp3');
    //this.audio.preload(ToastMode[ToastMode.success], 'assets/soundEffects/' + ToastMode[ToastMode.success] + '.mp3');
    this.audio.preload(ToastMode[ToastMode.message], 'assets/soundEffects/' + ToastMode[ToastMode.message] + '.mp3');

  }

  logout() {
    this.auth.logout().subscribe(() => {
      this.menuCtrl.close();
    });
  }

  getBranch(id): string {
    for(let i = 0 ; i < this.branches.length ; ++i) {
      if(this.branches[i].value === id)
        return this.branches[i].text;
    }
    return '';
  }
}
