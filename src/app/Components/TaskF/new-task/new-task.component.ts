import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { T } from 'angular-bootstrap-md/lib/free/utils/keyboard-navigation';
import { Task } from 'src/app/Classes/Task';
import { StatusService } from 'src/app/Services/status.service';
import { TaskService } from 'src/app/Services/task.service';

//import { TaskService } from 'src/app/Services/task.service';
import {
  NgbCalendar,
  NgbCalendarHebrew, NgbDate,
  NgbDatepickerI18n,
  NgbDatepickerI18nHebrew,
  NgbDateStruct
} from '@ng-bootstrap/ng-bootstrap';
import { ConvertDateService } from 'src/app/Services/convert-date.service';
import { CreateNewTaskNameComponent } from '../create-new-task-name/create-new-task-name.component';
import { level } from 'src/app/Classes/level';
import { LevelService } from 'src/app/Services/level.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
  providers: [
    {provide: NgbCalendar, useClass: NgbCalendarHebrew},
    {provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nHebrew}
  ]
})


export class NewTaskComponent implements OnInit {
newTask:Task
  constructor(public dialogRef: MatDialogRef<NewTaskComponent>,
    
 @Inject(MAT_DIALOG_DATA) public data: {idStudent: number},
  private taskSer:TaskService,
  private LevelSer:LevelService,
  private statusSer:StatusService
  ,private ConvertDateSer:ConvertDateService,
  public dialog: MatDialog,
  private calendar: NgbCalendar, public i18n: NgbDatepickerI18n) {
    this.dayTemplateData = this.dayTemplateData.bind(this);
  }
  dayTemplateData(date: NgbDate) {
    return {
      gregorian: (this.calendar as NgbCalendarHebrew).toGregorian(date)
    };
  }
  levelList:Array<level>=new Array<level>();

  startDate: NgbDateStruct;
  endDate:NgbDateStruct
  selectToday() {
    this.startDate = this.calendar.getToday();
    this.endDate = this.calendar.getToday();

  }
  newTaskForm = new FormGroup({
    NameTask: new FormControl('',[Validators.required]),
    StartDate: new FormControl('',[Validators.required]),
    EndDate: new FormControl('',[Validators.required])
  });
  ngOnInit(): void {
    this.selectToday()
    this.LevelSer.getLevel().subscribe(data=>{debugger;  this.levelList=data},er=>{});
debugger;
    this.newTask=new Task(0,null,null,null,this.data.idStudent,null);
    // if(this.taskNameSer.ListTaskName==null ||this.taskNameSer.ListTaskName.length<1 )
    // this.taskNameSer.getAllTaskByIdSchool(JSON.parse(localStorage.getItem('currentUser')).myData.IdSchool).subscribe(
    //   myData=>
    //   this.taskNameSer.ListTaskName=myData
    // )
  }
  checkedTaskName(value:number)
{
  if(value==0)
    {this.createNewTaskName()}
  else
  this.newTask.IdTask=value;
}

  addTask()//כל מה שקשור לתאריך נצטרך זאת למשימה לתלמיד
  {

//     let sdH= new NgbDate(this.startDate.year, this.startDate.month, this.startDate.day);
//     let sdG= (this.calendar as NgbCalendarHebrew).toGregorian(sdH);
//     if(sdG.month==1)
//     {
//       sdG.month=12;
//       sdG.year=sdG.year-1
//     }
//     else
//     sdG.month=sdG.month-1;
//     this.newTask.StartDate=new Date(sdG.year,sdG.month,sdG.day);

//     let edH= new NgbDate(this.endDate.year, this.endDate.month, this.endDate.day);
//     if(sdG.month==1)
//     {
//       sdG.month=12;
//       sdG.year=sdG.year-1
//     }
//     else
//     sdG.month=sdG.month-1;
//     let edG= (this.calendar as NgbCalendarHebrew).toGregorian(edH);
//     this.newTask.EndDate=new Date(edG.year,edG.month,edG.day);

//     if(new Date(this.newTask.EndDate)< new Date(this.newTask.StartDate))
//     {

//       alert("תאריך סיום לא יכול להיות קטן מתאריך התחלה")
//       this.selectToday()

//       return;
//     }

//     debugger
// this.taskSer.addTask(this.newTask).subscribe (
//   myData=>
//   {
//     if (myData.StartDate != null) {
//     this.ConvertDateSer.getHebrew(myData.StartDate).subscribe
//       (
//         StartDate => {
//           myData.StartDateHebrew = StartDate.hebrew;
//           if (myData.EndDate != null) {

//             this.ConvertDateSer.getHebrew(
              
//             ).subscribe(
//               EndDate => {
//                 myData.EndDateHebrew = EndDate.hebrew
//                 this.closeDialog(myData)
//               }
//             )
//           }
//           else
//             this.closeDialog(myData)
//         }
//       )}
//       else
//       {
//         if (myData.EndDate != null) {

//           this.ConvertDateSer.getHebrew(myData.EndDate).subscribe(
//             EndDate => {
//               myData.EndDateHebrew = EndDate.hebrew
//               this.closeDialog(myData)
//             }
//           )
//         }
//         else
//           this.closeDialog(myData)
//       }
//   }
// )
  }
  closeDialog(newTask) {
    this.dialogRef.close(newTask);
  }
createNewTaskName()
{
  // const dialogRef = this.dialog.open(CreateNewTaskNameComponent, {
  //   disableClose: true,
  //   width: '25%',

  // });

  // dialogRef.afterClosed().subscribe(result => {
  //   debugger
  //   console.log('The dialog was closed');
  //   if (typeof result == "object") {
  //     {let arr=this.taskNameSer.ListTaskName;

  //       this.taskNameSer.ListTaskName.push(result)
  //       this.newTask.IdNameTask=result.IdTaskName
  //     }
  //   }
  // });
}
}
