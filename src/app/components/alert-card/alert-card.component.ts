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
  @Input()  type: 'warning' | 'danger' | 'primary' | 'success';
  @Input()  alerts: Alert[];

  details = false;

  constructor() { }

  ngOnInit() {
  }
}
