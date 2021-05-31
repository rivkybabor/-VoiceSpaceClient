import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../Classes/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }
  // url="https://shutafladafserver.azurewebsites.net/api/Task/";
  url="api/Task/";

currentListTask:Array<Task>;
  getAllTaskByIdStudent(idStudent:number):Observable<Array<Task>>
  {
    return this.http.get<Array<Task>>(this.url+"GetAllTaskByIdStudent/"+idStudent)
  }
  getTaskByIdTask(isTask:number):Observable<Task>
  {
    return this.http.get<Task>(this.url+"getTaskByIdTask/"+isTask)

  }
  addTask(t:Task):Observable<Task>
  {
    return this.http.post<Task>(this.url+"AddTask",t)

  }
  GetAllTaskByIdLevel(idLevel:number):Observable<Array<Task>>
  {
    return this.http.get<Array<Task>>(this.url+"GetAllTaskByIdLevel/"+idLevel)
  }
  EditTask(t:Task):Observable<Task>
  {
    return this.http.post<Task>(this.url+"EditTask",t)
  }
  GetTasks():Observable<Array<Task>>
  {
    debugger;
    return this.http.get<Array<Task>>(this.url+"GetTasks")
  }

  a():Observable<boolean>{
    return this.http.get<boolean>(this.url+"a");
  }

}
