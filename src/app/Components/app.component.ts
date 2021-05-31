import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusService } from '../Services/status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  // this.router.navigate(["/Login"]);
// this.statusSer.getStatus().subscribe(myData=>this.statusSer.listStatus=myData)
  }
  title = 'voicespaceclient';
  constructor(private router: Router,private statusSer:StatusService){}

//   printComponent(cmpName) {
//     const printContent = document.getElementById(cmpName);
//     const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
//     WindowPrt.document.write(printContent.innerHTML);
//     WindowPrt.document.close();
//     WindowPrt.focus();
//     WindowPrt.print();
//     WindowPrt.close();
// }

}
