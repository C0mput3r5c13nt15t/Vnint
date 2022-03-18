import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { FeedbackService } from 'src/app/services/feedback.service';
import { ErrorService } from 'src/app/services/error.service';
import {Feedback} from "../../../../interfaces/feedback";
import {AlertService} from "../../../../services/alert.service";

@Component({
  selector: 'app-view-single-feedback',
  templateUrl: './view-single-feedback.page.html',
  styleUrls: ['./view-single-feedback.page.scss'],
})
export class ViewSingleFeedbackPage implements OnInit {
  feedback: Feedback;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private feedbackService: FeedbackService,
              private alertController: AlertController,
              private translate: TranslateService,
              private alertService: AlertService,
              private errorService: ErrorService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (paramMap.has('feedbackId')) {
        this.getFeedback(Number(this.activatedRoute.snapshot.paramMap.get('feedbackId')));
      } else {
        this.router.navigate(['/view feedback']);
      }
    });
  }

  getFeedback(feedbackId) {
    this.feedbackService.getSingleFeedback(feedbackId).subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        this.feedback = resp.feedback;
      },
    });
  }

  async deleteFeedback() {
    const alert = await this.alertController.create({
      header: this.translate.instant('ACTIONS.VIEW_SINGLE_FEEDBACK.INPUT.alertHeader'),
      message: this.translate.instant('ACTIONS.VIEW_SINGLE_FEEDBACK.INPUT.alertText'),
      buttons: [
        {
          cssClass: 'cancel-text',
          text: this.translate.instant('GENERAL.POPUPS.cancel'),
          role: 'cancel',
        }, {
          text: this.translate.instant('ACTIONS.VIEW_SINGLE_FEEDBACK.INPUT.deleteButton'),
          handler: () => {
            this.feedbackService.deleteFeedback(this.feedback.id).subscribe({
              error: error => {
                this.errorService.errorOccurred.emit(error);
              },
              next: response => {
                const resp: any = response;
                this.alertService.alert("success", this.translate.instant('ACTIONS.VIEW_SINGLE_FEEDBACK.title'), resp.message, "checkmark")
              },
              complete: () => {
                this.router.navigate(['/view-feedback']);
              },
            });
          }
        }
      ]
    });
    await alert.present();
  }

}
