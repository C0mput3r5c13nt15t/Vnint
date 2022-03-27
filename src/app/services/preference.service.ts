import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  private headers = new HttpHeaders({
    accept: 'application/json',
    contentType: 'application/json',
  });
  private options = { this:this.headers, withCredentials: true };

  constructor(private http: HttpClient) { }

  public getPreferences(): Observable<object> {
    return this.http.get('/api/preferences', this.options);
  }

  public getPreference(preferenceId: number): Observable<object> {
    return this.http.get('/api/preferences/' + preferenceId, this.options);
  }

  public getAssociatedPreferences(): Observable<object> {
    return this.http.get('/api/user/preferences', this.options);
  }

  public createPreference(preferenceId: number): Observable<object> {
    return this.http.post('/api/user/preferences/' + preferenceId, null, this.options);
  }

  public deletePreference(preferenceId: number): Observable<object> {
    return this.http.delete('/api/user/preferences/' + preferenceId, this.options);
  }
}
