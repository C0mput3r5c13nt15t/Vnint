import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Permission } from 'src/app/interfaces/permission';
import { AuthService } from 'src/app/services/auth.service';
import {AlertService} from 'src/app/services/alert.service';
import {QuoteService} from 'src/app/services/quote.service';
import {Quote} from 'src/app/interfaces/quote';
import {ErrorService} from "../../services/error.service";
import {UserService} from "../../services/user.service";
import {AlertController} from "@ionic/angular";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  error = false;
  permissions: Permission[] = [];
  eventPermissions: Permission[] = [];
  today = new Date();
  curHr = this.today.getHours();
  quoteOfTheDay: Quote;

  constructor(private auth: AuthService,
              private router: Router,
              private translate: TranslateService,
              public alertService: AlertService,
              private alertController: AlertController,
              private quoteService: QuoteService,
              private errorService: ErrorService,
              private userService: UserService) { }

  ngOnInit() {
    this.quoteService.getQuote().subscribe({
      next: response => {
        const resp: any = response;
        this.quoteOfTheDay = {
          quote: resp.contents.quotes[0].quote,
          author: resp.contents.quotes[0].author,
          copyright: 'Copyright © ' + resp.copyright.year.toString() + ' ' + resp.copyright.url,
        }
      }
    })
    this.getGradeLevel();
  }

  ionViewWillEnter() {
    this.auth.authenticated().subscribe({
      error: () => {
        this.auth.setLoggedIn = false;
        this.auth.setSessionExpired = true;
        this.router.navigate(['/login']);
      },
      next: response => {
        const resp: any = response;
        if (resp.authenticated == false) {
          this.auth.setLoggedIn = false;
          this.auth.setSessionExpired = true;
          this.router.navigate(['/login']);
        } else {
          this.getPermissions();
          this.getEventPermissions();
        }
      },
    });
  }

  getPermissions() {
    this.auth.permissions().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        this.permissions = resp.permissions;
      },
    });
  }

  getEventPermissions() {
    this.auth.eventPermissions().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        this.eventPermissions = resp.permissions;
      },
    });
  }

  getGradeLevel() {
    this.userService.getGradeLevel().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;

        if (!resp.grade_level && this.auth.getLoggedIn) {
          this.setGradeAlert();
        }
      },
    });
  }

  async setGradeAlert() {
    const alert = await this.alertController.create({
      header: this.translate.instant('DASHBOARD.SET_GRADE_POPUP.alertHeader'),
      message: this.translate.instant('DASHBOARD.SET_GRADE_POPUP.alertMessage'),
      inputs: [
        {
          name: 'grade_level',
          type: 'number',
          min: 0,
          max: 14
        }
      ],
      buttons: [
        {
          text: this.translate.instant('DASHBOARD.SET_GRADE_POPUP.external'),
          handler: () => {
            this.userService.convertSelfToGuestAttendant().subscribe({
              error: error => {
                this.errorService.errorOccurred.emit(error);
              },
              next: response => {
                const resp: any = response;
                this.alertService.alert("success", resp.message, "", "checkmark")
              }
            });
          }
        }, {
          text: this.translate.instant('GENERAL.POPUPS.ok'),
          handler: data => {
            this.userService.setGradeLevel(data.grade_level).subscribe({
              error: error => {
                this.errorService.errorOccurred.emit(error);
              },
              next: response => {
                const resp: any = response;
                this.alertService.alert("success", resp.message, "", "checkmark")
              }
            });
          }
        }
      ]
    });

    await alert.present();
  }

  hasOneSetOfPermissions(permissions, setsOfRequiredPermissions: Permission[][]) {
    for (const setOfRequiredPermissions of setsOfRequiredPermissions) {
      if (this.arrayContainsArray(permissions, setOfRequiredPermissions)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Returns true if the first specified array contains all elements
   * from the second one. false otherwise.
   *
   * @param {array} superset
   * @param {array} subset
   *
   * @returns {boolean}
   */
  arrayContainsArray (superset, subset) {
    return subset.every(function (value) {
      return (superset.includes(value));
    });
  }
}
