import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private headers = new HttpHeaders({
    accept: 'application/json',
    contentType: 'application/json',
  });
  private options = { this:this.headers, withCredentials: true };

  constructor(private http: HttpClient) { }

  public getFeedback(): Observable<object> {
    return this.http.get('/api/feedback', this.options);
  }

  public getSingleFeedback(feedbackId): Observable<object> {
    return this.http.get('/api/feedback/' + feedbackId, this.options);
  }

  public giveFeedback(feedbackCredentials): Observable<object> {
    return this.http.post('/api/feedback', feedbackCredentials, this.options);
  }

  public deleteFeedback(feedbackId): Observable<object> {
    return this.http.delete('/api/feedback/' + JSON.stringify(feedbackId), this.options);
  }
}
