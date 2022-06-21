import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const rootUrl = 'http://localhost:8090/api/user';
const getUrl = 'http://localhost:8090/api/user/get-all-users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(getUrl);
  }
  get(username: string): Observable<any> {
    return this.get(`${rootUrl}/${username}`);
  }
}
