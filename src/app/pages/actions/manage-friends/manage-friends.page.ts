import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Friendship } from 'src/app/interfaces/friendship';
import { FriendshipService } from 'src/app/services/friendship.service';
import { ErrorService } from 'src/app/services/error.service';
import {AlertService} from "../../../services/alert.service";
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-manage-friends',
  templateUrl: './manage-friends.page.html',
  styleUrls: ['./manage-friends.page.scss'],
})
export class ManageFriendsPage implements OnInit {
  addFriendForm: FormGroup;
  isProcessed = false;
  offered_friendships: Friendship[] = [];
  received_friendships: Friendship[] = [];

  constructor(public formBuilder: FormBuilder,
              private alertCtrl: AlertController,
              private translate: TranslateService,
              private friendshipService: FriendshipService,
              private errorService: ErrorService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.addFriendForm = this.formBuilder.group({
      respondent_email: ['', Validators.required],
      fax: []
    });
  }

  get errorControl() {
    return this.addFriendForm.controls;
  }

  ionViewWillEnter() {
    this.getFriends()
  }

  getFriends() {
    this.friendshipService.getAssociatedFriendship().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        this.offered_friendships = resp.offered_friendships;
        this.received_friendships = resp.received_friendships;
      },
    });
  }

  removeFriend(friendshipId) {
    this.friendshipService.deleteFriendship(friendshipId).subscribe({
      error: error => {
        if (error.error.message == 'missingPermissions') {
          this.alertService.alert("danger", this.translate.instant('GENERAL.missingPermissions'), '', 'lock-closed');
        } else {
          this.errorService.errorOccurred.emit(error);
        }
      },
      next: response => {
        const resp: any = response;
        this.alertService.alert("success", this.translate.instant('ACTIONS.MANAGE_FRIENDS.title'), resp.message, "checkmark")
      },
      complete: () => {
        this.getFriends();
      },
    });
  }

  addFriend() {
    this.isProcessed = true;
    if (!this.addFriendForm.value.fax && this.addFriendForm.valid) {
      this.friendshipService.createFriendship({respondent_email: this.addFriendForm.value.respondent_email}).subscribe({
        error: error => {
          if (error.error.message == 'The given data was invalid.') {
            for (const errorType in error.error.errors) {
              const errors: any = [];
              for (const errorMessage in error.error.errors[errorType]) {
                errors.push({[error.error.errors[errorType][errorMessage]]: true});
              }
              console.log(this.addFriendForm.controls)
              this.addFriendForm.controls[errorType].setErrors(errors);
            }
          } else if (error.error.message == 'missingPermissions') {
            this.alertService.alert("danger", this.translate.instant('GENERAL.missingPermissions'), '', 'lock-closed');
          } else {
            this.errorService.errorOccurred.emit(error);
          }
          this.isProcessed = false;
        },
        next: response => {
          const resp: any = response;
          this.alertService.alert("success", this.translate.instant('ACTIONS.MANAGE_FRIENDS.title'), resp.message, "checkmark")
        },
        complete: () => {
          this.addFriendForm.reset()
          this.isProcessed = false;
          this.getFriends();
        },
      });
    }
  }

  acceptFriend(friendshipId) {
    this.friendshipService.acceptFriendship(friendshipId).subscribe({
      error: error => {
        if (error.error.message == 'missingPermissions') {
          this.alertService.alert("danger", this.translate.instant('GENERAL.missingPermissions'), '', 'lock-closed');
        } else {
          this.errorService.errorOccurred.emit(error);
        }
      },
      next: response => {
        const resp: any = response;
        this.alertService.alert("success", this.translate.instant('ACTIONS.MANAGE_FRIENDS.title'), resp.message, "checkmark")
      },
      complete: () => {
        console.log('Friend accepted');
        this.getFriends();
      },
    });
  }

}
