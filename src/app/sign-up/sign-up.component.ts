import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  public full_name = "";
  public phone_no = "";
  public email = "";
  public password  = "";
  public usersArray:any = [];


  signup () {
    let obj = {full_name:this.full_name, phone_no:this.phone_no, email:this.email, password:this.password};
    this.usersArray.push(obj);
    localStorage.setItem("taskUsers",JSON.stringify(this.usersArray));
  }
}
