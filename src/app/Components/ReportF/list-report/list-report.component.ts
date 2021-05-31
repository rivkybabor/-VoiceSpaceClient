import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { StudentReport } from 'src/app/Classes/StudentReport';
import { ReportService } from 'src/app/Services/report.service';
import { NewReportComponent } from '../new-report/new-report.component';

@Component({
  selector: 'app-list-report',
  templateUrl: './list-report.component.html',
  styleUrls: ['./list-report.component.css']
})
export class ListReportComponent implements OnInit {
  @Input() id:number

  constructor(private reportSer:ReportService,private route: ActivatedRoute, public dialog: MatDialog) { }
  listReport:StudentReport[];
  ngOnInit(): void {
    this.listReport=new Array()
    this.reportSer.getAllReportByIdStudent(this.id).subscribe(
      myData=>
     { this.listReport=myData,
      this.listReport.reverse()

    }

    )
  }
  addNewReport()
  {
    debugger
    const dialogRef = this.dialog.open(NewReportComponent, {
      disableClose: true,
      width: '80%',
      height: '80%',
      data: { idStudent:this.id,idDiagnostic:JSON.parse(localStorage.getItem('currentUser')).myData.IdUser },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (typeof result == "object")
        this.listReport.unshift(result)
        })
  }
}
