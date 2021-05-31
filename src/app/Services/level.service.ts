import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { level } from '../Classes/level';
import { Task } from '../Classes/Task';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(private http:HttpClient) { }
  url="api/Level/";
  currentListTask:Array<Task>;
  getLevel():Observable<Array<level>>
  {
    return this.http.get<Array<level>>(this.url+"GetLevel");
  }
  getTasks():Observable<Array<Task>>
  {
    return this.http.get<Array<Task>>(this.url+"GetTasks"); 
  }
}
