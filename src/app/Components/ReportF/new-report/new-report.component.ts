import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentReport } from 'src/app/Classes/StudentReport';
import { ReportService } from 'src/app/Services/report.service';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.css']
})
export class NewReportComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewReportComponent>,
     @Inject(MAT_DIALOG_DATA) public data: {idStudent:number,idDiagnostic:number},
     private reportSer:ReportService) { }
report:StudentReport
  ngOnInit(): void {
    debugger

    this.report=new StudentReport(0,this.data.idStudent,this.data.idDiagnostic,"","",new Date(),"","")
  }
  log(report:string)
  {
    console.log(
      report
    );

  }
  addReport(title:string,rep:string)
  {
debugger
this.report.Title=title;
this.report.report=rep
this.reportSer.addReport(this.report).subscribe(
  myData=>
  {

    this.closeDialog(myData)},
  err=>
  {}
)

  }
  closeDialog(newReport) {
    this.dialogRef.close(newReport);
  }
}
