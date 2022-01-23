import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private history: string[] = [];
  private defaultUrl = '/login';
  private defaultUrlIfAuthenticated = '/dashboard';

  constructor(private router: Router,
              private auth: AuthService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.history.includes(event.urlAfterRedirects)) {
          this.history = this.history.slice(0, this.history.indexOf(event.urlAfterRedirects) + 1);
        } else {
          this.history.push(event.urlAfterRedirects);
        }
      }
    });
  }

  public get getHistory() {
    return this.history;
  }

  public back(): void {
    this.history.pop();
    const backLocation = this.history.pop();
    if (backLocation) {
      this.router.navigate([backLocation]);
    } else {
      if (this.auth.getLoggedIn == true) {
        this.router.navigate([this.defaultUrlIfAuthenticated]);
      } else {
        this.router.navigate([this.defaultUrl]);
      }
    }
  }
}
