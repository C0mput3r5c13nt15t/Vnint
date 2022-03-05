import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Friendship } from 'src/app/interfaces/friendship';
import { FriendshipService } from 'src/app/services/friendship.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-manage-friends',
  templateUrl: './manage-friends.page.html',
  styleUrls: ['./manage-friends.page.scss'],
})
export class ManageFriendsPage implements OnInit {
  offered_friendships: Friendship[] = [];
  received_friendships: Friendship[] = [];

  constructor(private alertCtrl: AlertController,
              private translate: TranslateService,
              private friendshipService: FriendshipService,
              private errorService: ErrorService) { }

  ngOnInit() {
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
        this.errorService.errorOccurred.emit(error);
      },
      next: () => {},
      complete: () => {
        this.getFriends();
      },
    });
  }

  addFriend() {
    let alert = this.alertCtrl.create({
      header: this.translate.instant('ACTIONS.MANAGE_FRIENDS.FRIENDS.ADD_FRIEND_ALERT.header'),
      backdropDismiss: true,
      inputs: [
        {
          name: 'email',
          placeholder: this.translate.instant('ACTIONS.MANAGE_FRIENDS.FRIENDS.ADD_FRIEND_ALERT.email'),
        }
      ],
      buttons: [
        {
          cssClass: 'cancel-text',
          text: this.translate.instant('GENERAL.POPUPS.cancel'),
          role: 'cancel'
        },
        {
          text: this.translate.instant('ACTIONS.MANAGE_FRIENDS.FRIENDS.ADD_FRIEND_ALERT.addButton'),
          handler: input => {
            this.friendshipService.createFriendship({respondent_email: input.email}).subscribe({
              error: error => {
                if (error.error.message == 'The given data was invalid.') {
                  let errors: any = [];
                  for (const errorType in error.error.errors) {
                    for (const errorMessage in error.error.errors[errorType]) {
                      errors.push(error.error.errors[errorType][errorMessage] + '\n');
                      this.errorService.errorOccurred.emit(error);
                    }
                  }
                } else {
                  this.errorService.errorOccurred.emit(error);
                }
              },
              next: () => {},
              complete: () => {
                this.getFriends();
              },
            });
            return false;
          }
        }
      ]
    });
    alert.then(addFriendAlert => {
      addFriendAlert.present();
    });
  }

  acceptFriend(friendshipId) {
    this.friendshipService.acceptFriendship(friendshipId).subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: () => {},
      complete: () => {
        console.log('Friend accepted');
        this.getFriends();
      },
    });
  }

}
