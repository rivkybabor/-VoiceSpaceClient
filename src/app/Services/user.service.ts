import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../Classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http:HttpClient) { }
// url="https://shutafladafserver.azurewebsites.net/api/User/"
url="api/User/";

user:user
getAllUsers():Observable<user[]>
{
  return this.http.get<user[]>(this.url+"GetAllUsers");
}

getUserByUserNameAndPassword(userName:string, password:string):Observable<user>
{
  let userData={userName:userName,password:password}
debugger
  return this.http.post<user>("https://localhost:44398/api/User/GetUserByUserNameAndPassword",userData)
}
addUser(u:user):Observable<user>
{
  debugger
  return this.http.post<user>(this.url+"AddUser",u)

}
}
