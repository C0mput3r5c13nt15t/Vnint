import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorService } from 'src/app/services/error.service';
import {StyleService} from '../../services/style.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  language = 'de';
  timezone = 'Europe/Berlin';
  notSupported = false;

  constructor(public translateService: TranslateService,
              private cookieService: CookieService,
              public auth: AuthService,
              private errorService: ErrorService,
              public styleService: StyleService) { }

  ngOnInit() {
    if (this.translateService.currentLang) {
      this.language = this.translateService.currentLang;
    } else {
      this.language = this.translateService.defaultLang;
    }
  }

  ionViewWillEnter() {
    this.auth.authenticated().subscribe({
      next: response => {
        const authenticated: any = response;
        if (authenticated.authenticated == true) {
          this.auth.setLoggedIn = true;
        }
      },
    });
    this.setApiLanguage();
  }

  languageChange() {
    this.cookieService.set('language', this.language, 365);
    this.translateService.use(this.language);
    this.setApiLanguage();
  }

  themeChange(){
    this.styleService.updateDarkMode();
  }

  setApiLanguage() {
    this.notSupported = false;
    this.auth.setAPILanguage(this.language).subscribe({
      error: error => {
        if (error.error.message == 'languageNotSupported') {
          this.notSupported = true;
        } else {
          this.errorService.errorOccurred.emit(error);
        }
      },
      next: () => {}});
  }
}
