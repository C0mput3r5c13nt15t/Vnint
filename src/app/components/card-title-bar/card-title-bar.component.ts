import {Component, Input, OnInit} from '@angular/core';
import {AlertController} from "@ionic/angular";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-card-title-bar',
  templateUrl: './card-title-bar.component.html',
  styleUrls: ['./card-title-bar.component.scss'],
})
export class CardTitleBarComponent implements OnInit {
  @Input() title: string = '';
  @Input() backButton: boolean = true;
  @Input() help: string = '';
  @Input() color: string = 'primary';

  constructor(private alertController: AlertController,
              private translateService: TranslateService) {}

  ngOnInit() { }

  async presentHelp() {
    const alert = await this.alertController.create({
      header: this.translateService.instant('GENERAL.help'),
      message: this.help,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
