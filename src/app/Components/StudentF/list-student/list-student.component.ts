import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { WavesModule, TableModule,IconsModule, InputsModule, MdbTableDirective, MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { diagnostic } from 'src/app/Classes/diagnostic';
import { student } from 'src/app/Classes/student';
import { DiagnosticService } from 'src/app/Services/diagnostic.service';
import { StudentService } from '../../../Services/student.service';
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  elements: any = [];
  headElements = [  'תז','שם פרטי', 'שם משפחה','טלפון'];
  headElementsToSort = [ 'tz','first','last','phon'];

  searchText: string = '';
  previous: string;
  showAddStudentToDiagnostic: boolean = false
  addStudent: student;
  constructor(private studentSer: StudentService,
     private diagnosticSer: DiagnosticService,
     private router:Router) { }
  @HostListener('input') oninput() {
    this.searchItems();
  }
  @Input() diagnostic: diagnostic;
  permission: number;
  loaderTable:boolean;
  ngOnInit() {
    debugger
    this.loaderTable=true
     this.permission = JSON.parse(localStorage.getItem('currentUser')).myData.IdPermission;
    if (this.diagnostic != null || this.permission==2)
     {
        this.getStudentByDiagnostic()

        }
           //Get All Student of Diagnostic
    else
      this.getAllStudentByIdSchool()    //Get All Student of School

  }
  searchItems() {
    debugger
    const prev = this.mdbTable.getDataSource();
    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.elements = this.mdbTable.getDataSource();
    }
    if (this.searchText) {
      this.elements = this.mdbTable.searchLocalDataByMultipleFields(this.searchText, ['tz','first', 'last','phon']);
      this.mdbTable.setDataSource(prev);
    }
  }
  getAllStudentByIdSchool() {
    this.studentSer.getAllStudentBySchool(JSON.parse(localStorage.getItem('currentUser')).myData.IdSchool).subscribe
      (
        myData => {
          console.log(myData)
          this.studentSer.AllStudent = myData;
debugger
          for (let i = 0; i < myData.length; i++) {
            this.elements.push({
              id:  myData[i].IdStudent.toString(),
              tz: myData[i].Tz,
              first: myData[i].FirstName,
              last: myData[i].LastName,
              phon:myData[i].phonNamber
            });
          }
          this.mdbTable.setDataSource(this.elements);
          this.previous = this.mdbTable.getDataSource();
          this.loaderTable=false

        }
        ,
        myErr => {
          console.log(myErr)
        }
      )
  }
  getStudentByDiagnostic() {
if(this.diagnostic==null)
this.diagnosticSer.getDiagnosticById(JSON.parse(localStorage.getItem('currentUser')).myData.IdUser).subscribe(
  myData=>
 {
   this.diagnosticSer.currentDiagnostic=myData
  this.elements=new Array();
  for (let i = 0; i < this.diagnosticSer.currentDiagnostic.listStudents.length; i++) {
    this.elements.push({
      id:  this.diagnosticSer.currentDiagnostic.listStudents[i].IdStudent.toString(),
       tz: this.diagnosticSer.currentDiagnostic.listStudents[i].Tz,
      first: this.diagnosticSer.currentDiagnostic.listStudents[i].FirstName,
      last:this.diagnosticSer.currentDiagnostic.listStudents[i].LastName,
      phon:this.diagnosticSer.currentDiagnostic.listStudents[i].phonNamber
    });
  }
  this.mdbTable.setDataSource(this.elements);
  this.previous = this.mdbTable.getDataSource();
  this.loaderTable=false


 }
)
else
{
    this.elements=new Array();
    for (let i = 0; i < this.diagnostic.listStudents.length; i++) {
      this.elements.push({
        id:  this.diagnostic.listStudents[i].IdStudent.toString(),
         tz: this.diagnostic.listStudents[i].Tz,
        first: this.diagnostic.listStudents[i].FirstName,
        last: this.diagnostic.listStudents[i].LastName,
        phon:this.diagnostic.listStudents[i].phonNamber
      });
    }
    this.mdbTable.setDataSource(this.elements);
    this.previous = this.mdbTable.getDataSource();
    this.loaderTable=false
  }
}

  listStudent: student[]
  selectedlistStudent: student[]

  onKey(value) {
    this.selectedlistStudent = this.search(value);
  }

  search(value: string) {
    let filter = value.toLowerCase();
    return this.listStudent.filter(option => option.FirstName.toLowerCase().startsWith(filter) || option.LastName.toLowerCase().startsWith(filter) || option.Tz.toLowerCase().startsWith(filter));
  }

  showSelectStudent(frame) {
    frame.show()
    if (this.studentSer.AllStudent == null || this.studentSer.AllStudent == undefined)
      this.studentSer.getAllStudentBySchool(JSON.parse(localStorage.getItem('currentUser')).myData.IdSchool).subscribe
        (
          myData => {
            console.log(myData)
            this.studentSer.AllStudent = myData;
            this.showAddStudentToDiagnostic = true;
            this.listStudent = myData;
            this.selectedlistStudent = this.listStudent
          })
    else {
      this.showAddStudentToDiagnostic = true;

      this.listStudent = this.studentSer.AllStudent;
      this.selectedlistStudent = this.listStudent
    }
  }
  checkedStudent(s) {
    debugger
    this.addStudent = s;
  }
  addStudentToDiagnostic(frame) {
    debugger
    if (this.addStudent != null) {
      if (this.diagnostic.listStudents.find(d => d.IdStudent == this.addStudent.IdStudent))
        alert("תלמיד זה כבר קיים אצל מאבחן זה")
      else
        this.diagnosticSer.addStudentToDiagnostic(this.addStudent.IdStudent, this.diagnostic.IdUser, this.diagnostic.IdSchool).subscribe(
          myData => {
            if(myData!=null)
          {  this.diagnosticSer.AllDiagnostic.push( myData);

            this.diagnostic = myData;
            this.loaderTable=true

            this.getStudentByDiagnostic();
            alert("התלמיד נוסף בהצלחה");
            this.showAddStudentToDiagnostic = false;
            frame.hide()
          }
          else
          {
            alert("תקלה בעת הוספת התלמיד");
            this.showAddStudentToDiagnostic = false;
          }
          },
          err => {
            alert("תקלה בעת הוספת התלמיד");
            this.showAddStudentToDiagnostic = false;
          }
        )
    }
  }
  showStudent(s)
  {
    debugger
    if(JSON.parse(localStorage.getItem('currentUser')).myData.IdPermission==1)
    this.router.navigate(['Manager/Student',s.id])
    else
    this.router.navigate(['Diagnostic/Student',s.id])

  }
  addStudentToSchool()
  {
    this.router.navigate(['Manager/Student',-1])
  }
}
