import { Component, OnInit } from '@angular/core';
import { Friendship } from 'src/app/interfaces/friendship';
import { FriendshipService } from 'src/app/services/friendship.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-manage-friendships',
  templateUrl: './manage-friendships.page.html',
  styleUrls: ['./manage-friendships.page.scss'],
})
export class ManageFriendshipsPage implements OnInit {
  friendships: Friendship[] = [];

  constructor(private friendshipService: FriendshipService,
              private errorService: ErrorService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getFriendships();
  }

  getFriendships() {
    this.friendshipService.getFriendships().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        this.friendships = resp.friendships;
      }
    });
  }

  authorizeFriendship(friendshipId) {
    this.friendshipService.authorizeFriendship(friendshipId).subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: () => {},
      complete: () => {
        console.log('Friendship authorized');
        this.getFriendships();
      },
    });
  }

  declineFriendship(friendshipId) {
    this.friendshipService.declineFriendship(friendshipId).subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: () => {},
      complete: () => {
        console.log('Friendship declined');
        this.getFriendships();
      },
    });
  }
}
