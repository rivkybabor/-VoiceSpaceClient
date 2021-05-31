import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { student } from '../Classes/student';
import { StudentReport } from '../Classes/StudentReport';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
// url="https://shutafladafserver.azurewebsites.net/api/StudentReport/"
url="api/StudentReport/";

  constructor(public http:HttpClient) { }
  getAllReportByIdStudent(idStudent:number):Observable<Array<StudentReport>>
  {
    return this.http.get<Array<StudentReport>>(this.url + "GetAllStudentReportByIdStudent/" + idStudent);
  }
  addReport(report:StudentReport):Observable<StudentReport>
  {
    return this.http.post<StudentReport>(this.url+"AddOrUpdateStudenReport",report)
  }
}
