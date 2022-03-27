import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendshipService {
  private headers = new HttpHeaders({
    accept: 'application/json',
    contentType: 'application/json',
  });
  private options = { this:this.headers, withCredentials: true };

  constructor(private http: HttpClient) { }

  public getFriendships(): Observable<object> {
    return this.http.get('/api/friendships', this.options);
  }

  public getFriendship(friendshipId: number): Observable<object> {
    return this.http.get('/api/friendships/' + friendshipId, this.options);
  }

  public getAssociatedFriendship(): Observable<object> {
    return this.http.get('/api/user/friendships', this.options);
  }

  public createFriendship(friendshipCredentials): Observable<object> {
    return this.http.post('/api/user/friendships', friendshipCredentials, this.options);
  }

  public acceptFriendship(friendshipId: number): Observable<object> {
    return this.http.put('/api/user/friendships/accept/' + friendshipId, this.options);
  }

  public authorizeFriendship(friendshipId: number): Observable<object> {
    return this.http.put('/api/friendships/authorise/' + friendshipId, this.options);
  }

  public declineFriendship(friendshipId: number): Observable<object> {
    return this.http.put('/api/friendships/decline/' + friendshipId, this.options);
  }

  public deleteFriendship(friendshipId: number): Observable<object> {
    return this.http.delete('/api/user/friendships/' + friendshipId, this.options);
  }
}
