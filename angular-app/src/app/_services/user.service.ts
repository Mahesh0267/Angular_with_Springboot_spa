import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const rootUrl = 'http://localhost:8090/api/test/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  register(value: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(rootUrl + 'admin');
  }

  get(username: string): Observable<any> {
    return this.http.get(`${rootUrl + 'get-user'}/${username}`);
  }

  getBYId(userId: number): Observable<any> {
    return this.http.get(`${rootUrl + 'get-user-info'}/${userId}`);
  }

  create(data: {}): Observable<any> {
    return this.http.post(rootUrl + 'create', data);
  }
  delete(userId: number): Observable<any> {
    return this.http.delete(`${rootUrl + 'delete'}/${userId}`);
  }

  update(userId: number, data: any): Observable<any> {
    return this.http.put(`${rootUrl + 'update'}/${userId}`, data);
  }
  // getUserBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'user', { responseType: 'text' });
  // }

  // getModeratorBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'mod', { responseType: 'text' });
  // }

  // getAdminBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'admin', { responseType: 'text' });
  // }
}
