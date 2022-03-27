import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private headers = new HttpHeaders({
    accept: 'application/json',
    contentType: 'application/json',
  });
  private options = { this:this.headers, withCredentials: true };

  constructor(private http: HttpClient) { }

  public getEvents(): Observable<object> {
    return this.http.get('/api/events', this.options);
  }

  public createEvent(eventCredentials): Observable<object> {
    return this.http.post('/api/events', eventCredentials, this.options);
  }

  public updateEvent(eventCredentials): Observable<object> {
    return this.http.put('/api/events/' + eventCredentials.id, eventCredentials, this.options);
  }

  public syncPermissions(eventId, permissionCredentials): Observable<object> {
    return this.http.patch('/api/events/' + eventId, permissionCredentials, this.options);
  }

  public deleteEvent(eventId): Observable<object> {
    return this.http.delete('/api/events/' + eventId, this.options);
  }
}
