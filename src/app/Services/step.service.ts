import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Step } from '../Classes/Step';

@Injectable({
  providedIn: 'root'
})
export class StepService {

  constructor(private http:HttpClient) { }
  // url="https://shutafladafserver.azurewebsites.net/api/Step/";
  url="api/Step/";

  getAllStepByIdTask(idTask:number):Observable<Array<Step>>
  {
    return this.http.get<Array<Step>>(this.url+"GetAllStepByIdTask/"+idTask)
  }
  addStep(s:Step):Observable<Step>
  {debugger
    return this.http.post<Step>(this.url+"AddStep",s)
  }
  editStep(s:Step):Observable<Step>
  {debugger
    return this.http.post<Step>(this.url+"EditStep",s)
  }
  GetAllStepByIdLevel(idLevel:number):Observable<Array<Step>>
  {
    return this.http.get<Array<Step>>(this.url+"GetAllStepByIdLevel/"+idLevel)
  }
  GetAllStepByIdDiagnostic(idDiagnostic:number):Observable<Array<Step>>
  {
    return this.http.get<Array<Step>>(this.url+"GetAllStepByIdDiagnostic/"+idDiagnostic)
  }
}
