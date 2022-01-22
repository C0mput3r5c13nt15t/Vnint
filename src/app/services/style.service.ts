import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  private prefersDark = false;

  constructor(private cookieService: CookieService) { }

  public get getDarkMode(): boolean {
    return this.prefersDark;
  }

  public set setDarkMode(darkMode: boolean) {
    this.prefersDark = darkMode;
    if (darkMode) {
      document.body.classList.toggle('dark', true);
    }
  }

  public updateDarkMode() {
    console.log('Hi');
    this.prefersDark = !this.prefersDark;
    this.cookieService.set('dark', this.prefersDark.toString(), 365);
    document.body.classList.toggle('dark');
  }
}
