import { Injectable } from '@angular/core';
//import { Storage } from '@ionic/storage-angular';
import { TranslateService } from '@ngx-translate/core';
import { Language } from './language';
import * as keys from 'src/app/data/keys.json';

const languages: Language[] = [{text: 'عربي', value: 'ar'},
                                {text: 'Deutsch', value: 'de'}]

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  //selected = keys.DEF_LANG;
  
  constructor(private translate: TranslateService) { }

  async setInitialAppLanguage(lang) {
    this.translate.setDefaultLang(keys.DEF_LANG);
    if(lang) await this.setLanguage(lang)
  }

  getLanguages() {
    return languages;
  }

  async setLanguage(lang) {
    await this.translate.use(lang);
    //this.selected = lang;
    //await this.storage.set(keys.LANG_KEY, lang);
  }

  getTranslation(str) {
    return this.translate.get(str);
  }

  /*getSelectedLanguage() {
    return this.selected;
  }*/
}
