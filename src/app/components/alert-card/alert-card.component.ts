import { Component, OnInit, Input } from '@angular/core';
import { Alert } from "../../interfaces/alert";

@Component({
  selector: 'app-alert-card',
  templateUrl: './alert-card.component.html',
  styleUrls: ['./alert-card.component.scss'],
})
export class AlertCardComponent implements OnInit {
  @Input()  alert: Alert;

  constructor() { }

  ngOnInit() {
  }
}
