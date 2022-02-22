import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Permission } from 'src/app/interfaces/permission';
import { AuthService } from 'src/app/services/auth.service';
import {AlertService} from "../../services/alert.service";
import {ErrorService} from "../../services/error.service";

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
              private alertService: AlertService,
              private errorService: ErrorService) { }

  ngOnInit() {
    this.alertService.alert('success', 'Hi', 'Cooöl')
    this.alertService.alert('warning', 'Hi', 'Cooöl')
    this.errorService.errorOccurred.emit({name: 'Failed', message: 'something went wrong'})
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

}
