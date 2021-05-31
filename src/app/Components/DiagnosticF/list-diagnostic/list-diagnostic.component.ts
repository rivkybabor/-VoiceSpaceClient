import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

import { DiagnosticService } from 'src/app/Services/diagnostic.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { diagnostic } from 'src/app/Classes/diagnostic';
import { WavesModule, TableModule, InputsModule, MdbTableDirective, MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-list-diagnostic',
  templateUrl: './list-diagnostic.component.html',
  styleUrls: ['./list-diagnostic.component.scss']
})
export class ListDiagnosticComponent implements OnInit {

  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  elements: any = [];
  headElements = ['שם פרטי', 'שם משפחה', 'טלפון', 'מייל'];
  searchText: string = '';
  previous: string;
  permission:number
  loaderTable:boolean

  constructor(private diagnosticSer: DiagnosticService, private router: Router,private activatedRoute:ActivatedRoute) {
  }

  @HostListener('input') oninput() {
    this.searchItems();
  }

  ngOnInit() {

    this.getAllDiagnosticByIdSchool()
    //Get All Diagnostics of School
    this.permission = JSON.parse(localStorage.getItem('currentUser')).myData.IdPermission;
    this.loaderTable=true;

  }
  searchItems() {
    const prev = this.mdbTable.getDataSource();
    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.elements = this.mdbTable.getDataSource();
    }
    if (this.searchText) {
      this.elements = this.mdbTable.searchLocalDataByMultipleFields(this.searchText, ['first', 'last']);
      this.mdbTable.setDataSource(prev);
    }
  }

  getAllDiagnosticByIdSchool() {
    this.diagnosticSer.getAllDiagnosticBySchool(JSON.parse(localStorage.getItem('currentUser')).myData.IdSchool).subscribe
      (
        myData => {
          console.log(myData)
          this.diagnosticSer.AllDiagnostic = myData ;

          for (let i = 0; i < myData.length; i++) {
            this.elements.push({
              id: myData[i].IdUser.toString(),
              first: myData[i].FirstName,
              last: myData[i].LastName,
              phon: myData[i].Phon,
              mail: myData[i].Mail,
            });
          }
          this.mdbTable.setDataSource(this.elements);
          this.previous = this.mdbTable.getDataSource();
          this.loaderTable=false;

        }
        ,
        myErr => {
          console.log(myErr)
        }
      )
  }
  openDiagnosticDetails(idDiagnostic:number)
  {
    this.router.navigate(['Manager/Diagnostic',idDiagnostic]
    // {      state: { idDiagnostic:'idDiagnostic' +idDiagnostic } }
    )
  }

  addDiagnosticToSchool()
  {
    this.router.navigate(['Manager/NewDiagnostic',-1])
  }
  showDiagnostic(d)
  {
    debugger
   
    this.router.navigate(['Manager/NewDiagnostic',d.id])

  }
}



