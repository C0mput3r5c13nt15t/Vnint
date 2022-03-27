import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Feedback} from 'src/app/interfaces/feedback';
import {FeedbackService} from 'src/app/services/feedback.service';
import {ErrorService} from 'src/app/services/error.service';
import {TranslateService} from "@ngx-translate/core";
import {AlertService} from "../../../../services/alert.service";

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.page.html',
  styleUrls: ['./view-feedback.page.scss'],
})
export class ViewFeedbackPage implements OnInit {
  searchFeedbackForm: FormGroup;
  feedback: Feedback[] = [];
  filteredFeedback: Feedback[] = [];

  constructor(private feedbackService: FeedbackService,
              private formBuilder: FormBuilder,
              private errorService: ErrorService,
              private translate: TranslateService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.searchFeedbackForm = this.formBuilder.group({
      type: [''],
      short_description: [''],
    });
    this.searchFeedbackForm.patchValue({
      type: ['general', 'feature', 'translation', 'typo', 'bug', 'other']
    })
  }

  ionViewWillEnter() {
    this.getFeedback();
  }

  searchFeedback() {
    this.filteredFeedback = [];
    this.feedback.forEach(feedback => {
      if (this.searchFeedbackForm.value.type.includes(feedback.type) && this.similar(feedback.short_description, this.searchFeedbackForm.value.short_description) > 0.3) {
        this.filteredFeedback.push(feedback);
      }
    });
  }

  similar(short_description, input) {
    if (!input) {
      return 1;
    }

    let equivalency = 0;
    const minLength = (short_description.length > input.length) ? input.length : short_description.length;
    const maxLength = (short_description.length < input.length) ? input.length : short_description.length;
    for(let i = 0; i < minLength; i++) {
        if(short_description[i] == input[i]) {
            equivalency++;
        }
    }
    return equivalency / maxLength;
  }

  getFeedback() {
    this.feedbackService.getFeedback().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        this.feedback = resp.feedback;
        this.filteredFeedback = resp.feedback;
      },
    });
  }

  deleteFeedback(feedbackId) {
    this.feedbackService.deleteFeedback(feedbackId).subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: () => {},
      complete: () => {
        this.getFeedback();
      },
    });
  }

}
