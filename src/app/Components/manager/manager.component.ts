import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DiagnosticService } from 'src/app/Services/diagnostic.service';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  constructor( public router: Router,private activatedRoute:ActivatedRoute, private diagnosticSer:DiagnosticService) { }

  ngOnInit(): void {

  }
  showListDiagnostics()
  {

    // this.router.navigate(['./ListDiagnostic']);
    this.router.navigate(['ListDiagnostic'], {relativeTo: this.activatedRoute});
  }
  showListStudents()
  {

    this.router.navigate(['ListStudent'], {relativeTo: this.activatedRoute});
  }



}
