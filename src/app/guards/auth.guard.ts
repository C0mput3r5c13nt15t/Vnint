import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /**
   * Contains the url to which unauthenticated requests are redirected
   */
  redirectUrl = '/dashboard';

  constructor(private auth: AuthService,
              private router: Router) { }

  /**
   * Checks if the user is allowed to access the page
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLoggedIn();
  }

  /**
   * Checks if the user is logged in
   */
  checkLoggedIn(): boolean {
    if (this.auth.getLoggedIn) {
      return true;
    }

    this.router.navigate([this.redirectUrl]);
    return false;
  }
}
