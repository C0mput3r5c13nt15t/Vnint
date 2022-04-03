import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private headers = new HttpHeaders({
    accept: 'application/json',
    contentType: 'application/json',
  });
  private options = { this:this.headers, withCredentials: true };

  constructor(private http: HttpClient) { }

  public getProjects(): Observable<object> {
    return this.http.get('/api/projects', this.options);
  }

  public getProjectsDetailed(): Observable<object> {
    return this.http.get('/api/projects_detailed', this.options);
  }

  public getProject(projectId: number): Observable<object> {
    return this.http.get('/api/projects/' + projectId, this.options);
  }

  public getAssociatedProject(): Observable<object> {
    return this.http.get('/api/user/project', this.options);
  }

  public createProject(projectCredentials): Observable<object> {
    const headers = new HttpHeaders({
      accept: 'application/json',
    });
    const options = { headers, withCredentials: true };

    const formData = new FormData();
    formData.append('topic', projectCredentials.topic);
    formData.append('title', projectCredentials.title);
    formData.append('image', projectCredentials.image);
    formData.append('description', projectCredentials.description);
    formData.append('cost', projectCredentials.cost);
    formData.append('min_grade', projectCredentials.min_grade);
    formData.append('max_grade', projectCredentials.max_grade);
    formData.append('min_participants', projectCredentials.min_participants);
    formData.append('max_participants', projectCredentials.max_participants);

    return this.http.post('/api/user/project', formData, options);
  }

  public promoteAssistant(assistantCredentials): Observable<object> {
    return this.http.post('/api/user/project/assistant', assistantCredentials, this.options);
  }

  public demoteAssistant(userId): Observable<object> {
    return this.http.delete('/api/user/project/assistant/' + userId, this.options);
  }

  public updateProject(projectCredentials): Observable<object> {
    return this.http.put('/api/user/project', projectCredentials, this.options);
  }

  public toggleAuthorizedOfProject(projectId): Observable<object> {
    return this.http.patch('/api/projects/' + projectId, null, this.options);
  }

  public deleteProject(projectId): Observable<object> {
    return this.http.delete('/api/projects/' + projectId, this.options);
  }
}
