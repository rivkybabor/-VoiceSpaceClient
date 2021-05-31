import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/app/Classes/Task';
//import { TaskNameService } from 'src/app/Services/task-name.service';

@Component({
  selector: 'app-create-new-task-name',
  templateUrl: './create-new-task-name.component.html',
  styleUrls: ['./create-new-task-name.component.css']
})
export class CreateNewTaskNameComponent implements OnInit {
  taskSer: any;

  constructor(public taskNameSer: Task, public dialogRef: MatDialogRef<CreateNewTaskNameComponent>) { }
  newTask: Task;
  nameTask: string
  ngOnInit(): void {
    this.newTask = new Task(0, "", JSON.parse(localStorage.getItem('currentUser')).myData.IdSchool)
  }
  add() {
    debugger
    this.newTask.TaskName = this.nameTask
    this.taskSer.addTask(this.newTask).subscribe(
      myData =>
        this.closeDialog(myData)
    )
  }
  cancel() {
    this.closeDialog(null)
  }
  closeDialog(newTask) {
    this.dialogRef.close(newTask);
  }
}
