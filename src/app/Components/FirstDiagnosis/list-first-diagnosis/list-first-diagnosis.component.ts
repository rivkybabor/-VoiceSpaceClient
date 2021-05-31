import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { firstDiagnosis } from 'src/app/Classes/firtstDiagnosis';
import { FirstDiagnosisService } from 'src/app/Services/first-diagnosis.service';

@Component({
  selector: 'app-list-first-diagnosis',
  templateUrl: './list-first-diagnosis.component.html',
  styleUrls: ['./list-first-diagnosis.component.css']
})
export class ListFirstDiagnosisComponent implements OnInit {

  constructor(private serFirstDiagnosis:FirstDiagnosisService) { }
@Input() idStudent:number;
@Output()myEvent = new EventEmitter();
listFirstDiagnosis:firstDiagnosis[]=new Array();
  ngOnInit(): void
   {
    this.serFirstDiagnosis.getFirstDiagnosisByIdStudent(this.idStudent).subscribe
    (
      myData=>
      {
        this.listFirstDiagnosis=myData;
      }
    )
  }
  playRecord() {
debugger
//  this.serFirstDiagnosis.downLoadFileFromIVR().subscribe(e=>
//   {
    let audio = new Audio();
    // this.serFirstDiagnosis.getFile("https://private.call2all.co.il/ym/api/DownloadFile?token=033064330:30020010%E2%80%8F&path=ivr2:100/1/003.WAV").subscribe(e=>
    // {
// debugger
    // audio.src =e;
    // audio.load();
    // audio.play().catch((e) => console.log(e));
  // })
    // let audio = new Audio();
    // this.serFirstDiagnosis.getFile("https://private.call2all.co.il/ym/api/DownloadFile?token=033064330:30020010%E2%80%8F&path=ivr2:100/1/003.WAV").subscribe(e=>
    // {
// debugger
    audio.src = "https://private.call2all.co.il/ym/api/DownloadFile?token=033064430:30020010&path=ivr2:/100/1/003.wav";
    audio.load();
    audio.play().catch((e) => console.log(e));
    // },err=>
    // {
    //       debugger

    // }

    // )
    }
    writeDiagnosis()
    {
      this.myEvent.emit(null)
    }



}
