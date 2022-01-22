import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() authChanged = new EventEmitter<string>();
  private loggedIn = false;
  private sessionExpired = false;

  private headers = new HttpHeaders({
    accept: 'application/json',
    contentType: 'application/json',
  });
  private options = {this: this.headers, withCredentials: true};

  constructor(private http: HttpClient) {
  }

  public get getSessionExpired(): boolean {
    return this.sessionExpired;
  }

  public get getLoggedIn(): boolean {
    return this.loggedIn;
  }

  public set setLoggedIn(newLoggedIn) {
    this.loggedIn = newLoggedIn;
    if (newLoggedIn == true) {
      this.sessionExpired = false;
    }
  }

  public set setSessionExpired(newSessionExpired) {
    this.sessionExpired = newSessionExpired;
  }

  public login(loginCredentials): Observable<object> {
    return this.http.post('/api/login', loginCredentials, this.options);
  }

  public logout(): Observable<object> {
    return this.http.post('/api/logout', this.options);
  }

  public register(registerCredentials): Observable<object> {
    return this.http.post('/api/register', registerCredentials, this.options);
  }

  public resendVerificationEmail(): Observable<object> {
    return this.http.post('/api/email/verification-notification', {}, this.options);
  }

  public sendForgotPasswordEmail(forgotPasswordCredentials): Observable<object> {
    return this.http.post('/api/forgot-password', forgotPasswordCredentials, this.options);
  }

  public resetPassword(resetPasswordCredentials): Observable<object> {
    return this.http.post('/api/reset-password', resetPasswordCredentials, this.options);
  }

  public changePassword(changePasswordCredentials): Observable<object> {
    return this.http.put('/api/user/password', changePasswordCredentials, this.options);
  }

  public updateProfile(updateProfileCredentials): Observable<object> {
    return this.http.put('/api/user/profile-information', updateProfileCredentials, this.options);
  }

  public authenticated(): Observable<object> {
    return this.http.get('/api/authenticated', this.options);
  }

  public emailVerifiedAt(): Observable<object> {
    return this.http.get('/api/email/verified', this.options);
  }

  public user(): Observable<object> {
    return this.http.get('/api/user', this.options);
  }

  public permissions(): Observable<object> {
    return this.http.get('/api/user/permissions', this.options);
  }

  public eventPermissions(): Observable<object> {
    return this.http.get('/api/events/permissions', this.options);
  }

  public setAPILanguage(newLanguage): Observable<object> {
    return this.http.get('/api/lang/' + newLanguage, this.options);
  }
}
