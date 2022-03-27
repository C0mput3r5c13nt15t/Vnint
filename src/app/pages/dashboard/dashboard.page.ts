import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Permission } from 'src/app/interfaces/permission';
import { AuthService } from 'src/app/services/auth.service';
import {AlertService} from 'src/app/services/alert.service';
import {QuoteService} from 'src/app/services/quote.service';
import {Quote} from 'src/app/interfaces/quote';

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
              public alertService: AlertService,
              private quoteService: QuoteService) { }

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
      error: () => {
        this.error = true;
      },
      next: response => {
        const resp: any = response;
        this.permissions = resp.permissions;
      },
    });
  }

  getEventPermissions() {
    this.auth.eventPermissions().subscribe({
      error: () => {
        this.error = true;
      },
      next: response => {
        const resp: any = response;
        this.eventPermissions = resp.permissions;
      },
    });
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
