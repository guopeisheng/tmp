export class User {
  userName: string;
  displayName: string;
  password: string;
  email: string;
  birthDate: string;
  zipcode: string;
  phoneNum: string;

  constructor(
    userName: string,
    password: string,
    displayName = 'example',
    email = "example@abc.com",
    birthDate = "1995-07-20",
    zipcode = "77030",
    phoneNum = "832-607-0726"){
      this.userName = userName;
      this.password = password;
      this.displayName = displayName;
      this.email = email;
      this.birthDate = birthDate;
      this.zipcode = zipcode;
      this.phoneNum = phoneNum;
    }
}
