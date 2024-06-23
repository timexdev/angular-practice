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
  public user_id:any = 0;

  ngOnInit () {

    let user_id:any = localStorage.getItem("taskId");

    if (user_id) {
      this.user_id = JSON.parse(user_id);
    }else {
      this.user_id = 1;
    }
    this.user_id = JSON.parse(user_id);

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
      let obj = {user_id: this.user_id, full_name:this.full_name, phone_no:this.phone_no, email:this.email, password:this.password};
      this.usersArray.push(obj);
      this.user_id = this.user_id + 1;
      localStorage.setItem("taskUsers",JSON.stringify(this.usersArray));
      localStorage.setItem("taskId", JSON.stringify(this.user_id));
      localStorage.setItem("taskCurrentUser", JSON.stringify(obj));
      this.route.navigate(["/signin"]);
    }
  }
}
