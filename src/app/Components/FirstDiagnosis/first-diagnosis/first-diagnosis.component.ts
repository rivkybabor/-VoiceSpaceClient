import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-diagnosis',
  templateUrl: './first-diagnosis.component.html',
  styleUrls: ['./first-diagnosis.component.css']
})
export class FirstDiagnosisComponent implements OnInit {

  constructor() { }
  @Input() index:number
  @Input() textQuestion: string;
  @Input() pathRecord: string;
  ngOnInit(): void {
  }
  playRecord() {

    let audio = new Audio();
    audio.src = this.pathRecord;
    audio.load();
    audio.play();
  }


}
