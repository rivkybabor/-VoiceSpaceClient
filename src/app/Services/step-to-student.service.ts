import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StepToStudent } from '../Classes/stepToStudent';

@Injectable({
  providedIn: 'root'
})
export class StepToStudentService {

  constructor(private http:HttpClient) { }
  url="api/StepStepToStudent/";

  getAllStepByIdTask(idTask:number):Observable<Array<StepToStudent>>
  {
    return this.http.get<Array<StepToStudent>>(this.url+"GetAllStepByIdTask/"+idTask)
  }
  addStep(s:StepToStudent):Observable<StepToStudent>
  {debugger
    return this.http.post<StepToStudent>(this.url+"AddStep",s)
  }
  editStep(s:StepToStudent):Observable<StepToStudent>
  {debugger
    return this.http.post<StepToStudent>(this.url+"EditStep",s)
  }
}
