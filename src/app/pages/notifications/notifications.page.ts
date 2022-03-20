import { Component, OnInit } from '@angular/core';
import {AlertService} from "../../services/alert.service";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  constructor(public alertService: AlertService) { }

  ngOnInit() {
  }

}
