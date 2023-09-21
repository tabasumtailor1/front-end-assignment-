import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { User, postUser } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User> {
    const url = 'https://mocki.io/v1/84954ef5-462f-462a-b692-6531e75c220d';

    return this.http.get<User>(url);
    }
    public saveUser(user: postUser): Observable<postUser> {
        const headers = { 'content-type': 'application/json'}  
    
        const body = JSON.stringify(user);
        const url = 'https://0211560d-577a-407d-94ab-dc0383c943e0.mock.pstmn.io/submitform';
        return this.http.post<postUser>(url, body, {'headers':headers});
      }
}
