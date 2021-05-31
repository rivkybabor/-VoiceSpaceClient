import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MdbTableDirective } from 'angular-bootstrap-md';
import { student } from 'src/app/Classes/student';
import { StudentService } from 'src/app/Services/student.service';
import { ConfirmStudentDialogComponent } from '../confitm-student-dialog/confirm-student-dialog.component';

@Component({
  selector: 'app-student-waiting-to-confirm',
  templateUrl: './student-waiting-to-confirm.component.html',
  styleUrls: ['./student-waiting-to-confirm.component.css']
})
export class StudentWaitingToConfirmComponent implements OnInit {

  constructor(private studentSer: StudentService, public dialog: MatDialog) { }
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  elements: any = [];
  headElements = ['תז', 'שם פרטי', 'שם משפחה', 'טלפון'];
  headElementsToSort = [ 'tz','first','last','phon'];

  @HostListener('input') oninput() {
    this.searchItems();
  }
  searchItems() {
    debugger
    const prev = this.mdbTable.getDataSource();
    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.elements = this.mdbTable.getDataSource();
    }
    if (this.searchText) {
      this.elements = this.mdbTable.searchLocalDataByMultipleFields(this.searchText, ['tz', 'first', 'last', 'phon']);
      this.mdbTable.setDataSource(prev);
    }
  }
  searchText: string = '';
  previous: string;
  listStudent: student[]
  ngOnInit(): void {
    debugger
    this.getAllConfirmStudent()
  }
  getAllConfirmStudent() {
    this.studentSer.getStudentWaitingConfirmBySchool(JSON.parse(localStorage.getItem('currentUser')).myData.IdSchool).subscribe
      (myData => {
        debugger

        this.listStudent = myData;
        this.createDataTable();

      },
        err => {
          debugger
        })
  }
createDataTable()
{

  this.elements = new Array();
  for (let i = 0; i < this.listStudent.length; i++) {
    this.elements.push({
      id:this.listStudent[i].IdStudent.toString(),
      tz:this.listStudent[i].Tz,
      first: this.listStudent[i].FirstName,
      last: this.listStudent[i].LastName,
      phon: this.listStudent[i].phonNamber
    });
  }
  this.mdbTable.setDataSource(this.elements);
  this.previous = this.mdbTable.getDataSource();
}
  confirmOrDelete(student) {
    const dialogRef = this.dialog.open(ConfirmStudentDialogComponent, {
      disableClose: true,
      width: '250px',
      data: { student: this.listStudent.find(s=>s.IdStudent==parseInt( student.id)) },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
debugger
      if (result == false)
        alert("לא ניתן היה למחוק את התלמיד")
      else
        if (result == true || typeof result == "object") {
          this.listStudent.splice(this.listStudent.findIndex(s=>s.IdStudent==parseInt( student.id)), 1)
          this.createDataTable();
        }


    });
  }
}
