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
  public userTask:any = [];
  public isEditing: boolean = false;
  public editIndex: number | null = null;
 

  ngOnInit (){
    let currentUser:any = localStorage.getItem("taskCurrentUser");
    this.currentUser =  JSON.parse(currentUser);

    let getTask = localStorage.getItem("allTasks");
    if (getTask) {
      this.taskArray = JSON.parse(getTask);
      this.userTask = this.taskArray.filter((each:any) => each.user == this.currentUser.user_id);
      console.log(this.userTask)

    }else {
      this.taskArray = [];
    }
  }

  // addTask () {
  //   let taskObj = {user: this.currentUser.user_id, taskName:this.taskName, taskDescription:this.taskDescription, taskTime:this.taskTime, taskDate:this.taskDate};

  //   this.taskArray.push(taskObj);
  //   this.userTask.push(taskObj)

  //   localStorage.setItem("allTasks", JSON.stringify(this.taskArray))

  //   console.log(this.taskArray)
  // }

  addTask() {
    let taskObj = {
      user: this.currentUser.user_id,
      taskName: this.taskName,
      taskDescription: this.taskDescription,
      taskTime: this.taskTime,
      taskDate: this.taskDate
    };

    if (this.isEditing && this.editIndex !== null) {
      this.taskArray[this.editIndex] = taskObj;
      this.userTask = this.taskArray.filter((each: any) => each.user == this.currentUser.user_id);
      this.isEditing = false;
      this.editIndex = null;
    } else {
      this.taskArray.push(taskObj);
      this.userTask.push(taskObj);
    }

    localStorage.setItem("allTasks", JSON.stringify(this.taskArray));

    // Clear the form
    this.taskName = '';
    this.taskDescription = '';
    this.taskTime = '';
    this.taskDate = '';
  }


  deleteTask(i: number) {
    this.userTask.splice(i, 1);
    this.taskArray = this.taskArray.filter((task: any) => task.user != this.currentUser.user_id || this.userTask.includes(task));
    localStorage.setItem("allTasks", JSON.stringify(this.taskArray));
  }

  editTask(i: number) {
    let task = this.userTask[i];
    this.taskName = task.taskName;
    this.taskDescription = task.taskDescription;
    this.taskTime = task.taskTime;
    this.taskDate = task.taskDate;
    this.isEditing = true;
    this.editIndex = this.taskArray.findIndex((each: any) => each === task);
  }

  // viewMore(i: number) {
  //   if (this.viewMoreIndex === i) {
  //     this.viewMoreIndex = null;
  //   } else {
  //     this.viewMoreIndex = i;
  //   }
  // }

  // deleteTask (i:number) {
  //     let tasks = this.userTask.filter((each:object, index:number) => index !== i);
  //     let task = this.taskArray.filter((each:object, index:number) => index !== i);
  //     this.userTask = tasks;
  //     this.taskArray = task;
  // }
}
