import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  public taskName = "";
  public taskDescription = "";
  public taskTime = "";
  public taskDate = "";
  public taskObj:any = {};
  public taskArray:any = [];
  public currentUser:any = {};

  ngOnInit (){
    let currentUser:any = localStorage.getItem("taskCurrentUser");
    this.currentUser =  JSON.parse(currentUser);

    let getTask = localStorage.getItem("allTasks");
    if (getTask) {
      this.taskArray = JSON.parse(getTask)
    }else {
      this.taskArray;
    }
  }

  addTask () {
    let taskObj = {user: this.currentUser.user_id, taskName:this.taskName, taskDescription:this.taskDescription, taskTime:this.taskTime, taskDate:this.taskDate};

    this.taskArray.push(taskObj);

    localStorage.setItem("allTasks", JSON.stringify(this.taskArray))

    console.log(this.taskArray)

  }
}
