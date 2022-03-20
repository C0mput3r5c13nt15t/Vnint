import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApplicationSettingsService {
  private headers = new HttpHeaders({
    accept: 'application/json',
    contentType: 'application/json',
  });
  private options = { this:this.headers, withCredentials: true };

  constructor(private http: HttpClient) { }

  public getApplicationSettings(): Observable<object> {
    return this.http.get('/api/application-settings', this.options);
  }

  public updateEvent(applicationSettingCredentials): Observable<object> {
    return this.http.put('/api/application-settings', applicationSettingCredentials, this.options);
  }
}
