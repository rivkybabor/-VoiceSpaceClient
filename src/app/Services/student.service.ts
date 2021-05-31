import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { student } from 'src/app/Classes/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  // url="https://shutafladafserver.azurewebsites.net/api/Student/";
  url="api/Student/";

  AllStudent:student[];
  getAllStudentBySchool(idSchool:number):Observable<Array<student>>
  {
    return this.http.get<Array<student>>(this.url+"GetAllStudentByIdSchool/"+idSchool)
  }
  getStudentWaitingConfirmBySchool(idSchool:number):Observable<Array<student>>
  {
    return this.http.get<Array<student>>(this.url+"GetStudentsWaitToCertifiedByIdSchool/"+idSchool)
  }
  addOrUpdateStudent(s:student):Observable<student>
{
  return this.http.post<student>(this.url+"AddOrUpdateStudent",s)
}
addDiagnosticToStudent(idStudent:number,idDiagnostic:number,idSchool:number):Observable<student>
{
  let obj={idStudent,idDiagnostic,idSchool}
  return this.http.post<student>(this.url+"AddDiagnosticToStudent",obj)
}
removeStudent(student:student):Observable<boolean>
{
  return this.http.post<boolean>(this.url+"RemoveStudent",student)
}
}


