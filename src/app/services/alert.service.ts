/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Alert } from '../interfaces/alert';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public alerts: Alert[] = [];

  constructor(private toastController: ToastController,
              private errorService: ErrorService) {
    this.errorService.errorOccurred.subscribe(error => {
      const alert: Alert = {
        type: 'error',
        title: error.name,
        message: error.message,
        created_at: new Date()
      };
      this.alerts.push(alert);
    });
  }

  public close(alertCreatedAt: Date): void {
    this.alerts = this.alerts.filter(alert => alert.created_at != alertCreatedAt);
  }

  public alertToast(message: string, duration: number=3000, position: 'top'|'middle'|'bottom'='top'): void {
    const toast = this.toastController.create({
      message,
      duration,
      position
    });

    toast.then(alertToast => {
      alertToast.present();
    });
  }

}
