import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbTableDirective } from 'angular-bootstrap-md';
import { Step } from 'src/app/Classes/Step';
import { ConvertDateService } from 'src/app/Services/convert-date.service';
import { StatusService } from 'src/app/Services/status.service';
import { StepService } from 'src/app/Services/step.service';
import { EditStepComponent } from '../edit-step/edit-step.component';
import { NewStepComponent } from '../new-step/new-step.component';

@Component({
  selector: 'app-list-steps',
  templateUrl: './list-steps.component.html',
  styleUrls: ['./list-steps.component.css']
})
export class ListStepsComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @Input() listStep: Step[];
  @Input() idTask: number;
  @HostListener('input') oninput() {
    this.searchItems();
  }
  constructor(private route: ActivatedRoute, private router: Router, private StepSer: StepService, private StatusSer: StatusService, private ConvertDateSer: ConvertDateService, public dialog: MatDialog) { }
  // ListStep:Step[]
  previous: string;
  elements: any = [];
  headElements = ['שם שלב', 'תיאור', 'תאריך הטלת השלב', 'תאריך ביצוע השלב', 'סטטוס', 'ציון'];
  headElementsToSort = ['name', 'assignmentDate', 'completionDate', 'describe', 'status', 'mark'];
  loaderTable:boolean
  searchText: string = '';
  ngOnInit(): void {
this.loaderTable=true;

    if (this.checkIsListStatusFill())//if list status without data call func fill and call func create elemt
    {
      this.fillHebrewDateAtList()
      // this.createListElementWithData();//list status is filling
    }

  }
  //כל מה שקשור לתאריך נצטרך לשלב לתלמיד
  fillHebrewDateAtList() {
    // for (let i = 0; i < this.listStep.length; i++) {
    //   this.loaderTable=true;

    //   if ((this.listStep[i].DateOfAssignmentHebrew == null || this.listStep[i].DateOfAssignmentHebrew == "---" )&&
    //     this.listStep[i].DateOfAssignment != null && this.listStep[i].DateOfAssignment != undefined)
    //     this.ConvertDateSer.getHebrew(this.listStep[i].DateOfAssignment).subscribe(
    //       dateOfAssignment => {
    //         debugger
    //         this.listStep[i].DateOfAssignmentHebrew = dateOfAssignment.hebrew
    //         if ((this.listStep[i].DateOfCompletionHebrew == null || this.listStep[i].DateOfCompletionHebrew == "---")
    //         && this.listStep[i].DateOfCompletion == null && this.listStep[i].DateOfCompletion != undefined)
    //           this.ConvertDateSer.getHebrew(this.listStep[i].DateOfCompletion).subscribe(
    //             dateOfCompletion => {
    //               debugger
    //               this.listStep[i].DateOfCompletionHebrew = dateOfCompletion.hebrew
    //               this.pushElement(this.listStep[i])
    //             }
    //           )
    //         else
    //           this.pushElement(this.listStep[i])
    //       }
    //     )
    //     else
    //     {
    //       if ((this.listStep[i].DateOfCompletionHebrew == null || this.listStep[i].DateOfCompletionHebrew == "---")
    //       && this.listStep[i].DateOfCompletion != null && this.listStep[i].DateOfCompletion != undefined)
    //         this.ConvertDateSer.getHebrew(this.listStep[i].DateOfCompletion).subscribe(
    //           dateOfCompletion => {
    //             debugger
    //             this.listStep[i].DateOfCompletionHebrew = dateOfCompletion.hebrew
    //             this.pushElement(this.listStep[i])
    //           }
    //         )
    //         else
    //         this.pushElement(this.listStep[i])
    //     }


    // }
    // this.loaderTable=false;


  }
  pushElement(s: Step) {
    debugger
    if (this.listStep != null && this.listStep != undefined && this.listStep.length > 0) {

      if (this.elements == null)
        this.elements = new Array();
      this.elements.push({
        id: s.IdStep.toString(),
        name: s.StepName,
        // assignmentDate: s.DateOfAssignmentHebrew,
        // completionDate: s.DateOfCompletionHebrew ? s.DateOfCompletionHebrew : "---",
        describe: s.Describe,
        //אני 
        //status: this.StatusSer.listStatus.find(s1 => s1.IdStatus == s.IdStatus).StatusName,
        // mark: s.Mark
      })
      this.mdbTable.setDataSource(this.elements);
      this.previous = this.mdbTable.getDataSource();
      this.loaderTable=false;

    }
  }
  checkIsListStatusFill() {
    if (this.StatusSer.listStatus == null || this.StatusSer.listStatus == undefined || this.StatusSer.listStatus.length < 1)

      this.StatusSer.getStatus().subscribe(
        myData => {
          this.StatusSer.listStatus = myData
          //   this.elements=null
          this.fillHebrewDateAtList()
        }
      )
    return true
  }
  // createListElementWithData() {
  //   if (this.listStep != null && this.listStep != undefined && this.listStep.length > 0) {
  //     this.elements = new Array();
  //     for (let i = 0; i < this.listStep.length; i++) {
  //       debugger

  //       this.elements.push({
  //         id: this.listStep[i].IdStep.toString(),
  //         name: this.listStep[i].StepName,
  //         assignmentDate: this.listStep[i].DateOfAssignmentHebrew,
  //         completionDate: this.listStep[i].DateOfCompletionHebrew,
  //         describe: this.listStep[i].Describe,
  //         status: this.StatusSer.listStatus.find(s => s.IdStatus == this.listStep[i].IdStatus).StatusName,
  //         mark: this.listStep[i].Mark
  //       })
  //     }
  //     this.mdbTable.setDataSource(this.elements);
  //     this.previous = this.mdbTable.getDataSource();
  //   }
  // }
  searchItems() {
    const prev = this.mdbTable.getDataSource();
    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.elements = this.mdbTable.getDataSource();
    }
    if (this.searchText) {
      this.elements = this.mdbTable.searchLocalDataByMultipleFields(this.searchText, ['name', 'assignmentDate', 'completionDate', 'describe', 'status', 'mark']);
      this.mdbTable.setDataSource(prev);
    }
  }

  createNewStep() {

    //אין פבה סטטוס ולכן מתאים לשלבלתמיד יש לעין עם הבדיקה אכן נכונה
    // if (this.listStep.length > 0 && this.listStep[this.listStep.length - 1].IdStatus == this.StatusSer.listStatus.find(s => s.StatusName == "X").IdStatus)
    //   alert("לא ניתן להוסיף שלב כל עוד השלב הקודם איננו בוצע")
     {
       
      const dialogRef = this.dialog.open(NewStepComponent, {
        disableClose: true,
        width: '50%',
        data: { idTask: this.idTask },
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if (typeof result == "object") {
          this.listStep.push(result)
          this.elements.push(
            {
               id:result.IdStep.toString(),
               name: result.StepName,
               assignmentDate: result.DateOfAssignmentHebrew,
               completionDate: result.DateOfCompletionHebrew ? result.DateOfCompletionHebrew : "---",
               describe: result.Describe,
               status: this.StatusSer.listStatus.find(s => s.IdStatus == result.IdStatus).StatusName,
               mark: result.Mark
             }
          )
          // this.createListElementWithData()
        }
      });
    }
  }
  editStep(indexStep: number) {
    debugger
    const dialogRef = this.dialog.open(EditStepComponent, {
      disableClose: true,
      width: '50%',
      data: { step: this.listStep[indexStep] },
    });

    dialogRef.afterClosed().subscribe(result => {
      debugger
      console.log('The dialog was closed');
      if (typeof result == "object") {
        debugger
        // if(this.listStep[indexStep].DateOfAssignment!=result.DateOfAssignment)
        // this.ConvertDateSer.getHebrew(result.DateOfAssignment).subscribe
        // (dateOfAssignment=>
        //   {
        //     result.DateOfAssignmentHebrew=dateOfAssignment.hebrew
            this.listStep[indexStep] = result
            this.elements[indexStep]=
           {
              id:result.IdStep.toString(),
              name: result.StepName,
              assignmentDate: result.DateOfAssignmentHebrew,
              completionDate: result.DateOfCompletionHebrew ? result.DateOfCompletionHebrew : "---",
              describe: result.Describe,
              status: this.StatusSer.listStatus.find(s => s.IdStatus == result.IdStatus).StatusName,
              //mark: result.Mark
            }
      //     }
      //     )
      //     else
      //  { this.listStep[indexStep] = result
      //   this.elements[indexStep]=
      //   {
      //      id:result.IdStep.toString(),
      //      name: result.StepName,
      //      assignmentDate: result.DateOfAssignmentHebrew,
      //      completionDate: result.DateOfCompletionHebrew ? result.DateOfCompletionHebrew : "---",
      //      describe: result.Describe,
      //      status: this.StatusSer.listStatus.find(s => s.IdStatus == result.IdStatus).StatusName,
      //      mark: result.Mark
      //    }
       }
        // this.elements = null
        // this.fillHebrewDateAtList();
      }
    );
  }
}



