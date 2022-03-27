import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesAndPermissionsService {
  private headers = new HttpHeaders({
    accept: 'application/json',
    contentType: 'application/json',
  });
  private options = { this:this.headers, withCredentials: true };

  constructor(private http: HttpClient) { }

  public getPermissions(): Observable<object> {
    return this.http.get('/api/permissions', this.options);
  }

  public getRoles(): Observable<object> {
    return this.http.get('/api/roles', this.options);
  }

  public createRole(roleCredentials): Observable<object> {
    return this.http.post('/api/roles', roleCredentials, this.options);
  }

  public togglePermission(roleId: number, permissionCredentials): Observable<object> {
    return this.http.patch('/api/roles/' + roleId, permissionCredentials, this.options);
  }

  public deleteRole(roleId: number): Observable<object> {
    return this.http.delete('/api/roles/' + JSON.stringify(roleId), this.options);
  }
}
