import { Component, OnInit, Input } from '@angular/core';
import { Alert } from "../../interfaces/alert";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-alert-card',
  templateUrl: './alert-card.component.html',
  styleUrls: ['./alert-card.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
        height: '0px',
        padding: '0px',
      })),
      transition('* => closed', [
        animate('0.3s')
      ]),
      transition('* => open', [
        animate('0.3s')
      ]),
    ]),
  ],
})
export class AlertCardComponent implements OnInit {
  @Input()  alert: Alert;

  details = false;

  constructor() { }

  ngOnInit() {
  }
}
