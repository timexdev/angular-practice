import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor (public route: Router) {}
  public full_name = "";
  public phone_no = "";
  public email = "";
  public password  = "";
  public usersArray:any = [];
  public message = false;

  ngOnInit () {
    let getUsers:any = localStorage.getItem("taskUsers");
    getUsers = JSON.parse(getUsers);
    console.log(getUsers, "getUsers")
    if (getUsers) {
      this.usersArray = getUsers
    } else {
      this.usersArray = [];
    }
    console.log(this.usersArray, "usersArray")
  }


  signup () {
    let checkExist = this.usersArray.find((each:any) => each.email == this.email);
    if (checkExist) {
      this.message = true
    }else{
      let obj = {full_name:this.full_name, phone_no:this.phone_no, email:this.email, password:this.password};
      this.usersArray.push(obj);
      localStorage.setItem("taskUsers",JSON.stringify(this.usersArray));
      this.route.navigate(["/addtask"]);
    }
  }
}
