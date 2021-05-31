import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  NgbCalendar,
  NgbCalendarHebrew, NgbDate,
  NgbDatepickerI18n,
  NgbDatepickerI18nHebrew,
  NgbDateStruct
} from '@ng-bootstrap/ng-bootstrap';
import { Step } from 'src/app/Classes/Step';
import { StepToStudent } from 'src/app/Classes/stepToStudent';
import { ConvertDateService } from 'src/app/Services/convert-date.service';
import { StatusService } from 'src/app/Services/status.service';
import { StepService } from 'src/app/Services/step.service';

@Component({
  selector: 'app-edit-step',
  templateUrl: './edit-step.component.html',
  styleUrls: ['./edit-step.component.css'],
  providers: [
    {provide: NgbCalendar, useClass: NgbCalendarHebrew},
    {provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nHebrew}
  ]
})
export class EditStepComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditStepComponent>, @Inject(MAT_DIALOG_DATA) public data1: {step:Step},private stepSer:StepService,public statusSer:StatusService,private ConvertDateSer:ConvertDateService,private calendar: NgbCalendar, public i18n: NgbDatepickerI18n) {
     this.dayTemplateData = this.dayTemplateData.bind(this);
  }
  dayTemplateData(date: NgbDate) {


      return {
      gregorian: (this.calendar as NgbCalendarHebrew).toGregorian(date)
    };
  }
  dateOfAssignment: NgbDateStruct;
  selectToday() {


  //   this.dateOfAssignment= (this.calendar as NgbCalendarHebrew).fromGregorian(new NgbDate(new Date(this.data1.step.DateOfAssignment).getFullYear(),new Date(this.data1.step.DateOfAssignment).getMonth()+1,new Date(this.data1.step.DateOfAssignment).getDate()))
  //  console.log(this.dateOfAssignment);

    // this.dateOfAssignment = this.calendar.getToday();
    // console.log(this.dateOfAssignment);

  }
  editStepForm = new FormGroup({
    StepName: new FormControl(''),
    DateOfAssignment: new FormControl(this.selectToday(),[Validators.required]),

    Describe: new FormControl(''),
    Mark: new FormControl('')
  });
editStep:Step
//editStep:Step
idStatus:number
  ngOnInit(): void {

    if(this.statusSer.listStatus.length<1)
    this.statusSer.getStatus().subscribe(
      myData=>
      this.statusSer.listStatus=myData
    )

    this.editStep={...this.data1.step}

    debugger
    this.idStatus=1
    this.selectToday()
  }
  //לבדיקה של שלב לתלמיד זה יהיה יעיל
  editStepFunc()
  {

//     if(this.editStep.Mark!=null && this.editStep.Mark>0)
//     this.editStep.IdStatus=this.statusSer.listStatus.find(e=>e.StatusName=="V").IdStatus
//     let sdH= new NgbDate(this.dateOfAssignment.year, this.dateOfAssignment.month, this.dateOfAssignment.day);
//     let sdG= (this.calendar as NgbCalendarHebrew).toGregorian(sdH);
//     if(sdG.month==1)
//     {
//       sdG.month=12;
//       sdG.year=sdG.year-1
//     }
//     else
//     sdG.month=sdG.month-1;
//     this.editStep.DateOfAssignment=new Date(sdG.year,sdG.month,sdG.day);
//     debugger
//     this.stepSer.editStep(this.editStep).subscribe(
//   myData=>
// {
//   debugger
//   if(myData!=null)
//   this.ConvertDateSer.getHebrew(myData.DateOfAssignment).subscribe
//   (
//    dateOfAssignment=>
//    {
//     myData.DateOfAssignmentHebrew=dateOfAssignment.hebrew;
//     if( myData.DateOfCompletion!=null)
//     {

//      this.ConvertDateSer.getHebrew(myData.DateOfCompletion).subscribe(
//       dateOfCompletion=>
//       {
//         myData.DateOfCompletionHebrew=dateOfCompletion.hebrew
//         this.closeDialog(myData)
//       }
//      )
//     }
//     else
//     this.closeDialog(myData)

//    }
//   )
// }
// )
  }
  closeDialog(editStep) {
    this.dialogRef.close(this.editStep);
  }
  checkedStatus(value:number)
  {
//this.editStep.IdStatus=value;
  }



}
