import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const rootUrl = 'http://localhost:8090/api/test/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(rootUrl + 'admin');
  }

  get(username: string): Observable<any> {
    return this.http.get(`${rootUrl + 'get-user'}/${username}`);
  }

  getBYId(userId: number): Observable<any> {
    return this.http.get(`${rootUrl + '/get-user-info'}/${userId}`);
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
