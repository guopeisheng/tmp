import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { ValidateService } from '../validate.service';
import { FormControl, FormGroup } from '@angular/forms';
import { images } from '../images';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  headshot: string;
  warnMsg: string[];

  updaForm = new FormGroup({
    userName: new FormControl(''),
    displayName: new FormControl(''),
    email: new FormControl(''),
    phoneNum: new FormControl(''),
    zipcode: new FormControl(''),
    password: new FormControl('')
  });

  //validate before update
  update(): void {
    this.validateService.clear();

    let userName = this.updaForm.get('userName').value;
    let displayName = this.updaForm.get('displayName').value;
    let email = this.updaForm.get('email').value;
    let phoneNum = this.updaForm.get('phoneNum').value;
    let zipcode = this.updaForm.get('zipcode').value;
    let password = this.updaForm.get('password').value;

    if (userName) {
      if (this.validateService.userName(userName)) {
        this.user.userName = userName;
        this.dataService.user.userName = userName;
      }
    }

    if (displayName) {
      this.user.displayName = displayName;
      this.dataService.user.displayName = displayName;

    }

    if (email) {
      if (this.validateService.email(email)) {
        this.user.email = email;
        this.dataService.user.email = email;
      }
    }

    if (phoneNum) {
      if (this.validateService.phoneNum(phoneNum)) {
        this.user.phoneNum = phoneNum;
        this.dataService.user.phoneNum = phoneNum;
      }
    }

    if (zipcode) {
      if (this.validateService.zipcode(zipcode)) {
        this.user.zipcode = zipcode;
        this.dataService.user.zipcode = zipcode;
      }
    }

    if (password) {
      this.user.password = password;
      this.dataService.user.password = password;
    }

    this.warnMsg = this.validateService.warnMessage;

  }


  constructor(
    private router: Router,
    private dataService: DataService,
    private validateService: ValidateService
  ) { this.user = new User('pg23', 'key') }

  ngOnInit() {
    this.user = this.dataService.getUser();
    this.headshot = images[0];
  }

}
