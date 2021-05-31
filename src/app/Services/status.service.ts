import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { status } from '../Classes/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
listStatus:status[]
// url="https://shutafladafserver.azurewebsites.net/api/Status/";
url="api/Status/";

  constructor(private http:HttpClient) {

   }
  getStatus():Observable<Array<status>>
  {
    return this.http.get<Array<status>>(this.url+"getStatuses");
  }
}
