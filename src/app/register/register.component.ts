import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ValidateService } from '../validate.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm = new FormGroup({
    userName: new FormControl(''),
    displayName: new FormControl(''),
    password: new FormControl(''),
    passwordConf: new FormControl(''),
    email: new FormControl(''),
    birthDate: new FormControl(''),
    zipcode: new FormControl(''),
    phoneNum: new FormControl('')
  })

  dataStatus: boolean;
  messages: string[];

  validate(): void {
    this.validateService.clear();

    this.validateService.userName(this.registerForm.get('userName').value);

    this.validateService.displayName(this.registerForm.get('displayName').value);

    this.validateService.email(this.registerForm.get('email').value);

    this.validateService.birthDate(this.registerForm.get('birthDate').value);

    this.validateService.zipcode(this.registerForm.get('zipcode').value);

    this.validateService.phoneNum(this.registerForm.get('phoneNum').value);

    this.validateService.password(this.registerForm.get('password').value,
  this.registerForm.get('passwordConf').value);


    this.dataStatus = this.validateService.status;
    this.messages = this.validateService.warnMessage;

    //use localStorage to store log in status
     if (this.dataStatus) {
    //   this.dataService.loadUser(
    //     this.registerForm.get('userName').value,
    //     this.registerForm.get('password').value,
    //     this.registerForm.get('displayName').value,
    //     this.registerForm.get('email').value,
    //     this.registerForm.get('birthDate').value,
    //     this.registerForm.get('zipcode').value,
    //     this.registerForm.get('phoneNum').value
    //   );
    //   localStorage.user = JSON.stringify(
    //     this.dataService.getUser()
    //   );
       this.router.navigate(['/login']);
     }

  }

  constructor(
    private validateService: ValidateService,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
