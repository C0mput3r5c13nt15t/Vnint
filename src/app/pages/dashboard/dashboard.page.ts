import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Permission } from 'src/app/interfaces/permission';
import { AuthService } from 'src/app/services/auth.service';
import {AlertService} from "../../services/alert.service";
import {element} from "protractor";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  error = false;
  permissions: Permission[] = [];
  eventPermissions: Permission[] = [];
  today = new Date()
  curHr = this.today.getHours()

  constructor(private auth: AuthService,
              private router: Router,
              public alertService: AlertService) { }

  ngOnInit() {
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

  hasOneSetOfPermissions(permissions, setsOfRequiredPermissions: Array<Permission>[]) {
    setsOfRequiredPermissions.forEach((setOfRequiredPermissions) => {
      if (this.arrayContainsArray(permissions, setOfRequiredPermissions)) {
        console.log(permissions, setOfRequiredPermissions)
        return true;
      }
    })
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
