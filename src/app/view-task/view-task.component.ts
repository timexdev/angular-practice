import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent {
  constructor (public actRoute: ActivatedRoute) {}

  ngOnInit () {
    let task_id = this.actRoute.snapshot.params["id"];
    let gettask:any = localStorage.getItem("allTasks");
    let task = JSON.parse(gettask);
    let findTask = task.find((each:any, i:number) => i == task_id)
    console.log(findTask)
  }
}
