import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const rootUrl = 'http://localhost:8090/api/test/';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(rootUrl + 'admin');
  }
  get(): Observable<any> {
    return this.http.get(`${rootUrl + 'admin'}`);
  }
  // /delete-user/{id}
  delete(userId: number): Observable<any> {
    return this.http.delete(`${rootUrl + '/admin/delete'}/${userId}`);
  }

  //create-user
  create(data: {}): Observable<any> {
    return this.http.post(rootUrl + '/admin/create', data);
  }

  getBYId(userId: number): Observable<any> {
    return this.http.get(`${rootUrl + '/admin'}/${userId}`);
  }
  update(userId: number, data: any): Observable<any> {
    return this.http.put(`${rootUrl + '/admin'}/${userId}`, data);
  }
}
