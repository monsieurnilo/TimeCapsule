import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
    private baseUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) { }
  
  public login(user: User): Promise<any> {
    return lastValueFrom( this.http.post(this.baseUrl + "/login", user));
  }

}
