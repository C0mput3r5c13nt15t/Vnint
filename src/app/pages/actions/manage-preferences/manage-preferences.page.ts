import { Component, OnInit } from '@angular/core';
import { Preference } from 'src/app/interfaces/preference';
import { PreferencesService } from 'src/app/services/preference.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-manage-preferences',
  templateUrl: './manage-preferences.page.html',
  styleUrls: ['./manage-preferences.page.scss'],
})
export class ManagePreferencesPage implements OnInit {
  preferences: Preference[] = [];

  constructor(private preferencesService: PreferencesService,
              private errorService: ErrorService) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.getPreferences();
  }

  getPreferences() {
    this.preferencesService.getAssociatedPreferences().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        this.preferences = resp.preferences;
      },
    });
  }

  removePreferences(preferenceId) {
    this.preferencesService.deletePreference(preferenceId).subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: () => { },
      complete: () => {
        this.getPreferences();
      }
    });
  }

}
