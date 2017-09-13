import { Injectable } from '@angular/core';
import { User } from '../classes/user';


@Injectable()
export class UserService {

  private isUserLoggedIn:boolean;
  public user: User;

  constructor() {
    this.user = new User();
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(){
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }

}
