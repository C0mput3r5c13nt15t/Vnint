import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {
  verifiedEmail = false;
  sentNotification = false;

  constructor(private auth: AuthService,
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
