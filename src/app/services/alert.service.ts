import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Alert } from '../interfaces/alert';
import { ErrorService } from './error.service';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public alerts: Alert[] = [];
  private toast: HTMLIonToastElement;

  constructor(private toastController: ToastController,
              private errorService: ErrorService,
              private router: Router) {
    this.errorService.errorOccurred.subscribe(error => {
      this.alert('danger', error.name, error.message, 'warning')
    });
  }

  public alert(type: 'success' | 'warning' | 'danger' | 'primary', title: string, message: string, icon='alert') {
    const alert: Alert = {
      icon: icon,
      color: type,
      title: title,
      message: message,
      created_at: new Date()
    };
    if (type == 'success') {
      this.successToast(alert);
    } else {
      this.alerts.push(alert)
      this.alertToast(alert);
    }
  }

  public close(alertCreatedAt: Date): void {
    this.alerts = this.alerts.filter(alert => alert.created_at != alertCreatedAt);
  }

  private async alertToast(alert: Alert) {
    try {
      await this.toast.dismiss();
    } catch(e) {}
    this.toast = await this.toastController.create({
      header: alert.title,
      message: alert.message,
      icon: alert.icon,
      color: alert.color,
      position: 'top',
      buttons: [
        {
          icon: 'bug',
          handler: () => {
            this.router.navigate(['/give-feedback']);
          }
        },
        {
          icon: 'close',
          role: 'cancel'
        },
      ]
    });
    await this.toast.present();
  }

  private async successToast(alert: Alert) {
    this.toast = await this.toastController.create({
      header: alert.title,
      message: alert.message,
      icon: alert.icon,
      color: alert.color,
      duration: 5000,
      position: 'bottom',
    });
    await this.toast.present();
  }

  get errors(): Alert[] {
    return this.alerts.filter(alert => {
      return alert.color == 'danger'
      }
    )
  }

  get warnings(): Alert[] {
    return this.alerts.filter(alert => {
        return alert.color == 'warning'
      }
    )
  }

  get others(): Alert[] {
    return this.alerts.filter(alert => {
        return alert.color == 'primary'
      }
    )
  }

}
