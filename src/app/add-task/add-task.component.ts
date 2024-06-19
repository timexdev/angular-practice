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

  addTask () {
    this.taskObj = {taskName:this.taskName, taskDescription:this.taskDescription, taskTime:this.taskTime, taskDate:this.taskDate};

    console.log(this.taskObj)

  }
}
