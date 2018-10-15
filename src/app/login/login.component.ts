import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  registeredUsers: User[];
  msg: string;

  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  })

  // login(): void {
  //   if (this.loginForm.get('userName').value&&this.loginForm.get('password').value) {
  //     this.dataService.loadUser(
  //       this.loginForm.get('userName').value,
  //       this.loginForm.get('password').value
  //     )
  //     this.user = new User(
  //       this.loginForm.get('userName').value,
  //       this.loginForm.get('password').value
  //     );
  //     //use localStorage to store log in status
  //     localStorage.user = JSON.stringify(this.user);
  //     this.router.navigate(['/mainpage']);
  //   }
  // }

  login(): void {
    let logUser = this.loginForm.get('userName').value
    let matchUser = this.registeredUsers.find(user => user.userName == logUser)
    if ( matchUser && this.loginForm.get('password').value.match(/^.+-.+-.+$/) ) {
      this.dataService.user = matchUser;
      this.user = matchUser;
      //use localStorage to store log in status
      localStorage.user = JSON.stringify(this.user);
      this.router.navigate(['/mainpage']);
    }
    else {
      this.msg = 'Wrong username or password!'
    }
  }


  constructor(
    private router: Router,
    private dataService: DataService,
    private http: Http
  ) {this.user = new User('zh20','three-word-passphrase') }

  ngOnInit() {

    localStorage.clear();
    this.msg = ''
    this.http.get('assets/users.json').map(res => res.json())
    .subscribe(u => this.registeredUsers = u.users)
  }

}
