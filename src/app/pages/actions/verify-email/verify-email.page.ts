import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorService } from 'src/app/services/error.service';
import { AlertService } from "../../../services/alert.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {
  verifiedEmail = false;
  sentNotification = false;

  constructor(private auth: AuthService,
              private alertService: AlertService,
              private translateService: TranslateService,
              private errorService: ErrorService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.auth.emailVerifiedAt().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        if (resp.email_verified_at) {
          this.verifiedEmail = true;
        }
      },
    });
  }

  reloadVerification() {
    this.auth.emailVerifiedAt().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        if (resp.email_verified_at) {
          this.verifiedEmail = true;
        }
      },
    });
  }

  resendEmailVerification() {
    this.sentNotification = true;
    this.auth.resendVerificationEmail().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: () => {},
      complete: () => {
        this.alertService.alert("primary", this.translateService.instant('ACTIONS.VERIFY_EMAIL.sent_title'), this.translateService.instant('ACTIONS.VERIFY_EMAIL.sent'), "send")
        this.auth.emailVerifiedAt().subscribe({
          error: () => {},
          next: response => {
            const resp: any = response;
            if (resp.email_verified_at != null) {
              this.verifiedEmail = true;
            }
          },
        });
      },
    });
  }

}
