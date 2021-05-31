import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { firstDiagnosis } from '../Classes/firtstDiagnosis';

@Injectable({
  providedIn: 'root'
})
export class FirstDiagnosisService {

  constructor(private http:HttpClient) { }
  url="https://localhost:44398/api/FirstDiagnosis/";

  getFirstDiagnosisByIdStudent( idStudent:number):Observable<firstDiagnosis[]>
  {
    debugger
    return this.http.get<firstDiagnosis[]>(this.url+"GetFirstDiagnosisByIdStudent/"+idStudent)
  }
  getFile(path:string):Observable<any>
  {
    return this.http.get(path, { responseType: 'blob' });
  }


  downLoadFileFromIVR() {

    return this.http.get("https://private.call2all.co.il/ym/api/DownloadFile?token=033064330:30020010&path=ivr2:100/1/003.WAV"
     )//.subscribe(response => this.downLoadFile(response, "wav"));
  }
  downloadFile(username: string, password: string, url: string, isprivate: boolean): Observable<any> {
//מה זה?
    return this.http.post("https://private.call2all.co.il/ym/api/DownloadFile?token=033064330:30020010%E2%80%8F&path=ivr2:100/1/003.WAV", { responseType: 'blob' });
  }

  /**
  * Method is use to download file.
  * @param data - Array Buffer data
  * @param type - type of the document.
  */
  downLoadFile(data: any, type: string) {
    debugger
    // let blob = new Blob([data], { type: type });
    // let url = window.URL.createObjectURL(blob);
    // let pwa = window.open(url);
    // if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
    //   alert('Please disable your Pop-up blocker and try again.');
    // }
  }
}
