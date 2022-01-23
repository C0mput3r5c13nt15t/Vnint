import { Component, Input, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { Alert } from '../../interfaces/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input() alert: Alert;
  itemColor = 'success';

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    if (this.alert.type == 'error') {
      this.itemColor = 'danger';
    } else {
      this.itemColor = 'success';
    }
  }

  close() {
    this.alertService.close(this.alert.created_at);
  }

}
