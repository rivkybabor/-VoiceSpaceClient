import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { diagnostic } from 'src/app/Classes/diagnostic';
import { DiagnosticService } from 'src/app/Services/diagnostic.service';

@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.scss']
})
export class DiagnosticComponent implements OnInit {

  constructor(private route: ActivatedRoute, private diagnosticSer: DiagnosticService) {
    console.log("routing", this.route.snapshot.paramMap.get('id'));

  }
  diagnostic: diagnostic
  ngOnInit(): void {
    debugger
    if(this.route.snapshot.paramMap.get('id')!=null)
    {if (this.diagnosticSer.AllDiagnostic != null)
   { for (let i = 0; i < this.diagnosticSer.AllDiagnostic.length; i++)
        if (this.diagnosticSer.AllDiagnostic[i].IdUser == parseInt(this.route.snapshot.paramMap.get('id')))
          this.diagnostic = this.diagnosticSer.AllDiagnostic[i]
   }
   else
   {
    this.diagnosticSer.getAllDiagnosticBySchool(JSON.parse(localStorage.getItem('currentUser')).myData.IdSchool).subscribe
    (myData=>
     { this.diagnosticSer.AllDiagnostic=myData
      for (let i = 0; i < this.diagnosticSer.AllDiagnostic.length; i++)
      if (this.diagnosticSer.AllDiagnostic[i].IdUser == parseInt(this.route.snapshot.paramMap.get('id')))
        this.diagnostic = this.diagnosticSer.AllDiagnostic[i]
    }
    );
   }
  }
  else
  {
    this.diagnosticSer.getDiagnosticById(JSON.parse(localStorage.getItem('currentUser')).myData.IdUser).subscribe(
      myData=>
      this.diagnostic=myData
    )

  }
    //this.diagnostic=this.diagnosticSer.AllDiagnostic.filter(d=>d.IdUser==parseInt( this.route.snapshot.paramMap.get('id')))[0];
  }

}
