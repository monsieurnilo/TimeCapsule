import { Injectable } from '@angular/core';
import { UserApiService } from './users.api.service';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private api: UserApiService) { }
  
  public async login(user: User): Promise<any> {
    try{
      return await this.api.login(user);
    }catch(error){
      throw error;
    }
  }
}