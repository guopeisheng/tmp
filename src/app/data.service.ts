import { Injectable } from '@angular/core';
import { User } from './user';



//this service is for component to get user dara
@Injectable()
export class DataService {
  user: User;

  loadUser(
    userName: string,
    password: string,
    displayName = 'example',
    email = "example@abc.com",
    birthDate = "1995-07-20",
    zipcode = "77030",
    phoneNum = "832-607-0726"
  ): void {
    this.user = new User(userName, password, displayName, email, birthDate, zipcode, phoneNum);
  }

  getUser(): User {
    if ( localStorage.user ) {
      this.user = JSON.parse(localStorage.user);
    }
    return this.user;
  }

  constructor() { }

}
