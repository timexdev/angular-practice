import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor (public route: Router) {}
  public email = "";
  public password = "";
  public usersArray = [];
  public message = false;
   

  ngOnInit (){
    let getUsers:any = localStorage.getItem("taskUsers");
    getUsers = JSON.parse(getUsers);
    console.log(getUsers, "getUsers")
    if (getUsers) {
      this.usersArray = getUsers
    } else {
      this.usersArray = [];
    }
  }

  signIn() {
    let findUser = this.usersArray.find((each:any) => each.email == this.email && each.password == this.password);

    if (findUser) {
      localStorage.setItem("taskCurrentUser", JSON.stringify(findUser));
      this.route.navigate(["/addtask"]);
    }else{
      this.message = true;
    }
    // console.log(findUser)
  }

}
