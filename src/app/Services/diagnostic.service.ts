import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { diagnostic } from '../Classes/diagnostic';
import { student } from '../Classes/student';
import { user } from '../Classes/user';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticService {

  constructor(private http:HttpClient) { }
  // url="https://shutafladafserver.azurewebsites.net/api/Diagnostic/";
  url="api/Diagnostic/";
  AllDiagnostic:diagnostic[];
  currentDiagnostic:diagnostic;
  getAllDiagnosticBySchool(id:number):Observable<Array<diagnostic>>
  {
    return this.http.get<Array<diagnostic>>(this.url+"GetAllDiagnosticByIdSchool/"+id)
  }
  addStudentToDiagnostic(idStudent:number,idDiagnostic:number,idSchool:number):Observable<diagnostic>
  {
    let obj={idStudent,idDiagnostic,idSchool}
    return this.http.post<diagnostic>(this.url+"AddStudentToDiagnostic",obj)
  }
  getDiagnosticById(idDiagnostic:number):Observable<diagnostic>
  {
return this.http.get<diagnostic>(this.url+"GetDiagnosticById/"+idDiagnostic)
  }
}
