/* eslint-disable @typescript-eslint/naming-convention */

import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './services/auth.service';
import { AlertController, MenuController, Platform } from '@ionic/angular';
import { ScreenSizeService } from './services/screensize.service';
import { User } from './interfaces/user';
import { Router } from '@angular/router';
import { ErrorService } from './services/error.service';
import { StyleService } from './services/style.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public user: User = {
    id: 0,
    name: 'username',
    email: 'email@email.com',
    project_id: 0,
  };

  constructor(private translateService: TranslateService,
              public auth: AuthService,
              private cookieService: CookieService,
              private platform: Platform,
              private screenSizeService: ScreenSizeService,
              private alertController: AlertController,
              private menuController: MenuController,
              private router: Router,
              private errorService: ErrorService,
              private styleService: StyleService) {
    this.initializeApp();
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event) {
    this.screenSizeService.onResize(event.target.innerWidth);
  }

  ngOnInit() {
    this.authenticate();

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    this.getCookies();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.screenSizeService.onResize(this.platform.width());
    });
    this.translateService.setDefaultLang('de');
    this.auth.authChanged.subscribe(() => this.authenticate());
  }

  authenticate() {
    this.auth.authenticated().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        if (resp.authenticated == true) {
          this.auth.setLoggedIn = true;
          this.user = resp.user;
        } else {
          this.user = {
            id: 0,
            name: 'username',
            email: 'email@email.com',
            project_id: 0,
          };
        }
      },
    });
  }

  getCookies() {
    const cookieLanguage = this.cookieService.get('language');
    if (cookieLanguage) {
      this.translateService.use(cookieLanguage);
      this.setApiLanguage(cookieLanguage);
    } else {
      this.setApiLanguage('de');
    }

    const cookiePrefersDark = this.cookieService.get('dark');
    this.styleService.setDarkMode = (cookiePrefersDark =='true');
  }

  setApiLanguage(language) {
    this.auth.setAPILanguage(language).subscribe({
      error: error => {
        if (error.error.message != 'languageNotSupported') {
          this.errorService.errorOccurred.emit(error);
        }
      },
      next: () => {}
    });
  }

  async logout() {
    const alert = await this.alertController.create({
      header: this.translateService.instant('MENU.LOGOUT_POPUP.alertHeader'),
      message: this.translateService.instant('MENU.LOGOUT_POPUP.alertText'),
      buttons: [
        {
          cssClass: 'cancel-text',
          text: this.translateService.instant('GENERAL.POPUPS.cancel'),
          role: 'cancel',
        }, {
          text: this.translateService.instant('MENU.LOGOUT_POPUP.logoutButton'),
          handler: () => {
            this.auth.logout().subscribe({
              next: () => {},
              complete: () => {
                this.menuController.toggle();
                this.auth.setLoggedIn = false;
                this.auth.setSessionExpired = false;
                this.router.navigate(['/login']);
                this.auth.authChanged.emit('logout');
              },
            });
          }
        }
      ]
    });
    await alert.present();
  }
}
