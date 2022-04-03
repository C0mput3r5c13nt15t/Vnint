import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers = new HttpHeaders({
    accept: 'application/json',
    contentType: 'application/json',
  });
  private options = { this:this.headers, withCredentials: true };

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<object> {
    return this.http.get('/api/users', this.options);
  }

  public getGradeLevel(): Observable<object> {
    return this.http.get('/api/user/grade_level', this.options);
  }

  public setGradeLevel(gradeLevel: number): Observable<object> {
    return this.http.patch('/api/user/grade_level/' + gradeLevel, this.options);
  }

  public convertSelfToGuestAttendant(): Observable<object> {
    return this.http.patch('/api/user/convert_self_to_guestAttendant', this.options);
  }

  public getUnsortedUsers(): Observable<object> {
    return this.http.get('/api/users_unsorted', this.options);
  }

  public convertToGuestAttendant(id: number): Observable<object> {
    return this.http.patch('/api/users/convert_to_guestAttendant/' + id, null, this.options);
  }

  public makeParticipant(id: number, projectId: number): Observable<object> {
    return this.http.patch('/api/users/' + id + '/make_participant/' + projectId, null, this.options);
  }
}
