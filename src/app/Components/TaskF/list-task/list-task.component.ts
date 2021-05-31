import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbTableDirective } from 'angular-bootstrap-md';
import { A } from 'angular-bootstrap-md/lib/free/utils/keyboard-navigation';
import { Task } from 'src/app/Classes/Task';
import { ConvertDateService } from 'src/app/Services/convert-date.service';
import { StatusService } from 'src/app/Services/status.service';
import { TaskService } from 'src/app/Services/task.service';
import { NewTaskComponent } from '../new-task/new-task.component';
import{LevelService}from 'src/app/Services/level.service';
@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;

  @HostListener('input') oninput() {
    this.searchItems();
  }

  constructor(private route: ActivatedRoute, private router: Router, public TaskSer: TaskService,public LevelSer:LevelService, private convertDateSer: ConvertDateService, public dialog: MatDialog) {

  }
  @Input() id:number
  listTask: Task[] = new Array();
  idStudent: number
  previous: string;
  elements: any = [];
  headElements = ['שם מטלה', 'תאריך התחלה', 'תאריך סיום', 'רשימת שלבים'];
  headElementsToSort = ['name', 'startDate', 'endDate'];
  loaderTable:boolean
  searchText: string = '';
  permission: number
  ngOnInit(): void {
    this.loaderTable=true;
    this.permission = JSON.parse(localStorage.getItem('currentUser')).myData.IdPermission;
    this.idStudent = this.id;
    this.getAllTask();
    
    //this.getAllTaskByIdStudent()
  }
  getAllTaskByIdStudent() {
    this.TaskSer.getAllTaskByIdStudent(this.idStudent).subscribe(
      myData => {
        debugger
        this.TaskSer.currentListTask = myData
        //קשור לתאריך
      //   for(let i=0;i<this.TaskSer.currentListTask.length;i++)
      //  { this.convertDateSer.getHebrew(this.TaskSer.currentListTask[i].StartDate).subscribe(
      //    startDate=>
      //    {this.TaskSer.currentListTask[i].StartDateHebrew=startDate.hebrew

      //  this.convertDateSer.getHebrew(this.TaskSer.currentListTask[i].EndDate).subscribe(
      //   endDate=>{this.TaskSer.currentListTask[i].EndDateHebrew=endDate.hebrew
      //     this.createListElementWithData();
      //   }

    //   )
    //  })
    //    }

      }
    )
  }
  getAllTask()

  {
    //this.LevelSer.getTasks().subscribe(myData=>{debugger; this.LevelSer.currentListTask=myData},er=>{console.log(er)});
    //this.TaskSer.a().subscribe(data=>{debugger},er=>{debugger})
    debugger;
    this.TaskSer.GetTasks().subscribe(myData=>{debugger; this.TaskSer.currentListTask=myData},er=>{console.log(er)});
  }
  createListElementWithData() {
    this.elements = new Array();
    for (let i = 0; i < this.TaskSer.currentListTask.length; i++) {

              this.elements.push({
                id: this.TaskSer.currentListTask[i].IdTask.toString(),
                name: this.TaskSer.currentListTask[i].IdTask,
                // startDate:  this.TaskSer.currentListTask[i].StartDateHebrew,
                // endDate: this.TaskSer.currentListTask[i].EndDateHebrew
              });
            }
    this.loaderTable=false;
    this.mdbTable.setDataSource(this.elements);
    this.previous = this.mdbTable.getDataSource();



  }
  navigateTask(idTask: number) {
    if (this.permission == 1)
      this.router.navigate(['Manager/Task', idTask])
    else
      this.router.navigate(['Diagnostic/Task', idTask])


  }
  searchItems() {
    debugger
    const prev = this.mdbTable.getDataSource();
    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.elements = this.mdbTable.getDataSource();
    }
    if (this.searchText) {
      this.elements = this.mdbTable.searchLocalDataByMultipleFields(this.searchText, ['name', 'startDate', 'endDate']);
      this.mdbTable.setDataSource(prev);
    }
  }

  createNewTask() {
    debugger
    const dialogRef = this.dialog.open(NewTaskComponent, {
      disableClose: true,
      width: '50%',
      data: { idStudent: this.idStudent },
    });

    dialogRef.afterClosed().subscribe(result => {
      debugger
      console.log('The dialog was closed');
      if (typeof result == "object") {
        this.TaskSer.currentListTask.push(result)
        this.createListElementWithData()
        this.navigateTask(result.IdTask)
      }
    });
  }

}
