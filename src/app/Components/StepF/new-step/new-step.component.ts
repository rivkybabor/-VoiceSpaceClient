import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Step } from 'src/app/Classes/Step';
import { ConvertDateService } from 'src/app/Services/convert-date.service';
import { StepService } from 'src/app/Services/step.service';
import {
  NgbCalendar,
  NgbCalendarHebrew, NgbDate,
  NgbDatepickerI18n,
  NgbDatepickerI18nHebrew,
  NgbDateStruct
} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-new-step',
  templateUrl: './new-step.component.html',
  styleUrls: ['./new-step.component.css'],
  providers: [
    {provide: NgbCalendar, useClass: NgbCalendarHebrew},
    {provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nHebrew}
  ]
})
export class NewStepComponent implements OnInit {
  newStep:Step;

  constructor(
    public dialogRef: MatDialogRef<NewStepComponent>,
     @Inject(MAT_DIALOG_DATA) public data: {idTask: number,idDiagnostic:number},
     private stepSer:StepService,private ConvertDateSer:ConvertDateService,
     private calendar: NgbCalendar, public i18n: NgbDatepickerI18n) {
      this.dayTemplateData = this.dayTemplateData.bind(this);
    }
    dayTemplateData(date: NgbDate) {
      return {
        gregorian: (this.calendar as NgbCalendarHebrew).toGregorian(date)
      };
    }
    dateOfAssignment: NgbDateStruct;
    selectToday() {

      this.dateOfAssignment = this.calendar.getToday();

    }


    newStepForm = new FormGroup({
      StepName: new FormControl('',[Validators.required]),
      DateOfAssignment: new FormControl('',[Validators.required]),
      Describe: new FormControl('',[Validators.required])
    });
  ngOnInit(): void {
    //מה שהיה בבנאי מתחת 
    //0,this.data.idTask,'',new Date(),null,1,0,'',JSON.parse(localStorage.getItem('currentUser')).myData.IdUser,null
  this.newStep=new Step();
   this. selectToday();
}
//קשור לתאריך יהיה במשימה לתלמיד ולא בכללי
   addStep()
   {
//     let sdH= new NgbDate(this.dateOfAssignment.year, this.dateOfAssignment.month, this.dateOfAssignment.day);
//     let sdG= (this.calendar as NgbCalendarHebrew).toGregorian(sdH);
//     if(sdG.month==1)
//     {
//       sdG.month=12;
//       sdG.year=sdG.year-1
//     }
//     else
//     sdG.month=sdG.month-1;
//     this.newStep.DateOfAssignment=new Date(sdG.year,sdG.month,sdG.day);
//      console.log(this.newStep);
// this.stepSer.addStep(this.newStep).subscribe(
//   myData=>
//   {
//     this.ConvertDateSer.getHebrew(myData.DateOfAssignment).subscribe
//       (
//         dateOfAssignment => {
//           myData.DateOfAssignmentHebrew = dateOfAssignment.hebrew;
//           if (myData.DateOfCompletion != null) {

//             this.ConvertDateSer.getHebrew(myData.
//               DateOfCompletion).subscribe(
//               dateOfCompletion => {
//                 myData.DateOfCompletionHebrew = dateOfCompletion.hebrew
//                 this.closeDialog(myData)
//               }
//             )
//           }
//           else
//             this.closeDialog(myData)
//   })})

   }
   closeDialog(newStep) {
    this.dialogRef.close(newStep);
  }

}
