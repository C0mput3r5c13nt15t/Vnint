import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-text-avatar',
  templateUrl: './text-avatar.component.html',
  styleUrls: ['./text-avatar.component.scss'],
})
export class TextAvatarComponent implements OnInit {
  @Input() name: string;
  @Input() email: string;
  avatarColor = "#0066FF";

  constructor() {}

  ngOnInit() {
  }

  calculateColor(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = '#';
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  }
}
