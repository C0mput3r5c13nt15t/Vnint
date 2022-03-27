import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeframeService {
  private headers = new HttpHeaders({
    accept: 'application/json',
    contentType: 'application/json',
  });
  private options = { this:this.headers, withCredentials: true };

  constructor(private http: HttpClient) { }

  public getTimeframes(projectId: number): Observable<object> {
    return this.http.get('projects/' + projectId + '/timeframes', this.options);
  }

  public createTimeframe(timeframeCredentials): Observable<object> {
    return this.http.post('/api/user/project/timeframes', timeframeCredentials, this.options);
  }

  public updateTimeframe(timeframeCredentials): Observable<object> {
    return this.http.put('/api/user/project/timeframes/' + timeframeCredentials.id, timeframeCredentials, this.options);
  }

  public deleteTimeframe(timeframeId: number): Observable<object> {
    return this.http.delete('/api/user/project/timeframes/' + JSON.stringify(timeframeId), this.options);
  }
}
