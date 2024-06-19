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

  addTask () {
    let taskObj = {taskName:this.taskName, taskDescription:this.taskDescription, taskTime:this.taskTime, taskDate:this.taskDate};

    this.taskArray.push(taskObj)

    console.log(this.taskArray)

  }
}
