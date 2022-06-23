import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const rootUrl = 'http://localhost:8090/api/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(rootUrl + '/get-all-users');
  }
  get(username: string): Observable<any> {
    return this.http.get(`${rootUrl + '/get-user'}/${username}`);
  }
  // /delete-user/{id}
  delete(userId: number): Observable<any> {
    return this.http.delete(`${rootUrl + '/delete-user'}/${userId}`);
  }

  //create-user
  create(data: {}): Observable<any> {
    return this.http.post(rootUrl + '/create-user', data);
  }

  getBYId(userId: number): Observable<any> {
    return this.http.get(`${rootUrl + '/getuser'}/${userId}`);
  }
  update(userId: number, data: any): Observable<any> {
    return this.http.put(`${rootUrl + '/update-users'}/${userId}`, data);
  }
}
