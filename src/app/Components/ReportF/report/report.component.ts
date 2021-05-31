import { Component, Input, OnInit } from '@angular/core';
import { NgbCalendarHebrew } from '@ng-bootstrap/ng-bootstrap';
import { StudentReport } from 'src/app/Classes/StudentReport';
import { ConvertDateService } from 'src/app/Services/convert-date.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
@Input() report:StudentReport
  constructor(private convertDateSer:ConvertDateService) { }
  showOrHide:boolean
  ngOnInit(): void {
    this.showOrHide=true;
    this.convertDateSer.getHebrew(this.report.Date).subscribe(
      date=>
      {this.report.HebrewDate=date.hebrew})
  }
st:string

}
