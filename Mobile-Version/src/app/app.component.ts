import { Component } from '@angular/core';
import { LanguageService } from './services/LanguageService/language.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private langService: LanguageService) {
    this.initializeApp();
  }

  initializeApp() {
    this.langService.setInitialAppLanguage('ar');
  }
}
