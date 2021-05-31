import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvertDateService {

  constructor(private http:HttpClient) { }
  getHebrew(da: Date): Observable<any> {

    let y: number = new Date(da).getFullYear();
    let m: number = new Date(da).getMonth();
    let d: number = new Date(da).getDate();

    m=(m+1)%13;
    let s = "https://www.hebcal.com/converter/?cfg=json&gy=" + y + "&gm=" + m + "&gd=" + d + "&g2h=1";
    return this.http.get<any>(s);
}

}
