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
      this.alert('error', error.name, error.message)
    });
  }

  public alert(type: string, title: string, message: string) {
    const alert: Alert = {
      type: type,
      title: title,
      message: message,
      created_at: new Date()
    };
    this.alerts.push(alert)
    this.alertToast(alert);
  }

  public close(alertCreatedAt: Date): void {
    this.alerts = this.alerts.filter(alert => alert.created_at != alertCreatedAt);
  }

  public alertToast(alert: Alert, duration: number=3000, position: 'top'|'middle'|'bottom'='top'): void {
    const message = alert.title + ': ' + alert.message
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
