import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { student } from 'src/app/Classes/student';
import { StudentService } from 'src/app/Services/student.service';
import { WavesModule, TableModule, IconsModule } from 'angular-bootstrap-md';
import { diagnostic } from 'src/app/Classes/diagnostic';
import { DiagnosticService } from 'src/app/Services/diagnostic.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private studentSer: StudentService, private diagnosticSer: DiagnosticService) { }
  student: student = new student();
  disabledStudent: boolean = true;
  permission: number;
  addStudent: boolean;
  showAddDiagnosticToStudent: boolean = false
  addDiagnostic: diagnostic;

  // studentForm = new FormGroup({
  //   firstNameS: new FormControl('',[Validators.required,Validators.pattern("[א-ת ]*")]),
  //   lastNameS: new FormControl('',[Validators.required,Validators.pattern("[א-ת ]*")]),
  //   tzS: new FormControl('',[Validators.required]),
  //   phon1S: new FormControl('', [Validators.required]),
  //   phon2S: new FormControl(''),
  //   nameFS: new FormControl('',[Validators.required,Validators.pattern("[א-ת ]*")]),
  //   tzFS: new FormControl('',[Validators.required]),
  //   phonFS: new FormControl('', [Validators.required, ]),
  //   nameMS: new FormControl('',[Validators.required,Validators.pattern("[א-ת ]*")]),
  //   tzMS: new FormControl('',[Validators.required]),
  //   phonMS: new FormControl('', [Validators.required])
  // });
  // get studentFormControl() {
  //   return this.studentForm.controls;
  // }
  ngOnInit(): void {
    debugger;
    this.permission = JSON.parse(localStorage.getItem('currentUser')).myData.IdPermission;
    if (parseInt(this.route.snapshot.paramMap.get('id')) == -1) {
      //add Student
      this.addStudent = true
      this.disabledStudent = false
    }
    else
    //show Student with details
    {
      this.addStudent = false
      this.disabledStudent = true

      if (this.studentSer.AllStudent != null && this.studentSer.AllStudent.length > 0) {
        for (let i = 0; i < this.studentSer.AllStudent.length; i++)
          if (this.studentSer.AllStudent[i].IdStudent == parseInt(this.route.snapshot.paramMap.get('id')))
            this.student = { ...this.studentSer.AllStudent[i] }
      }
      else {

        if (this.permission == 1)
          this.studentSer.getAllStudentBySchool(JSON.parse(localStorage.getItem('currentUser')).myData.IdSchool).subscribe(
            myData => {
              this.studentSer.AllStudent = myData;
              for (let i = 0; i < this.studentSer.AllStudent.length; i++)
                if (this.studentSer.AllStudent[i].IdStudent == parseInt(this.route.snapshot.paramMap.get('id')))
                  this.student = { ...this.studentSer.AllStudent[i] }
            }

          )
        else {
          this.student = this.diagnosticSer.currentDiagnostic.listStudents.find(s => s.IdStudent == parseInt(this.route.snapshot.paramMap.get('id')))
        }
      }
    }
    // this. navigate()
debugger

  }
  submit() {

    this.student.IdSchool = JSON.parse(localStorage.getItem('currentUser')).myData.IdSchool
    if (this.studentSer.AllStudent != null && this.studentSer.AllStudent != undefined)
      this.addAndUpdateStudent()
    else
      this.studentSer.getAllStudentBySchool(JSON.parse(localStorage.getItem('currentUser')).myData.IdSchool)
        .subscribe(
          myData => {
            this.studentSer.AllStudent = myData;
            this.addAndUpdateStudent()
          }
        )



  }
  cancelEdit() {
debugger;
    for (let i = 0; i < this.studentSer.AllStudent.length; i++)
      if (this.studentSer.AllStudent[i].IdStudent == parseInt(this.route.snapshot.paramMap.get('id')))
        this.student = { ...this.studentSer.AllStudent[i] }
    this.disabledStudent = !this.disabledStudent
  }
  cancelAdd() {
    this.student = new student();
  }
  addAndUpdateStudent() {
    this.student.Certified=true;
    if (this.addStudent && this.studentSer.AllStudent.find(s => s.Tz == this.student.Tz))
      alert("תלמיד זה כבר קיים במערכת")
    else
      this.studentSer.addOrUpdateStudent(this.student).subscribe(
        myData => {
          if (typeof (myData) === 'string')
            alert(myData);
          else {
            let i = this.studentSer.AllStudent.findIndex(s => s.IdStudent == myData.IdStudent)
            if (i != -1) {
              this.studentSer.AllStudent[i] = myData;
              this.disabledStudent = !this.disabledStudent
            }
            else {

              this.studentSer.AllStudent.push(myData);
              this.router.navigate(['Manager/ListStudent'])
            }
          }

        })
  }
  listDiagnostic: diagnostic[]
  selectedlistDiagnostic: diagnostic[]

  onKey(value) {
    this.selectedlistDiagnostic = this.search(value);
  }

  search(value: string) {
    let filter = value.toLowerCase();
    return this.listDiagnostic.filter(option => option.FirstName.toLowerCase().startsWith(filter) || option.LastName.toLowerCase().startsWith(filter) || option.Tz.toLowerCase().startsWith(filter));
  }

  showSelectDiagnostic(frame) {
    frame.show()
    if (this.diagnosticSer.AllDiagnostic == null || this.diagnosticSer.AllDiagnostic == undefined)
      this.diagnosticSer.getAllDiagnosticBySchool(JSON.parse(localStorage.getItem('currentUser')).myData.IdSchool).subscribe
        (
          myData => {

            this.diagnosticSer.AllDiagnostic = myData;
            this.showAddDiagnosticToStudent = true;
            this.listDiagnostic = myData;
            this.selectedlistDiagnostic = this.listDiagnostic
          })
    else {
      this.showAddDiagnosticToStudent = true;

      this.listDiagnostic = this.diagnosticSer.AllDiagnostic
      this.selectedlistDiagnostic = this.listDiagnostic
    }
  }
  checkedDiagnostic(d) {

    this.addDiagnostic = d;
  }
  addDiagnosticToStudent(frame) {

    if (this.addStudent != null) {
      if (this.student.listDiagnostics.find(d => d.IdUser == this.addDiagnostic.IdUser))
        alert("מאבחן זה כבר קיים אצל תלמיד זה")
      else
        this.studentSer.addDiagnosticToStudent(this.student.IdStudent, this.addDiagnostic.IdUser, this.student.IdSchool).subscribe(
          myData => {
            this.student = myData;


            let is = this.studentSer.AllStudent.findIndex(d => d.IdStudent == this.student.IdStudent)
            this.studentSer.AllStudent[is].listDiagnostics = this.student.listDiagnostics;

            alert("המאבחן נוסף בהצלחה");
            this.showAddDiagnosticToStudent = false;
            frame.hide()
          },
          err => {
            alert("תקלה בעת הוספת התלמיד");
            this.showAddDiagnosticToStudent = false;
          }
        )
    }
  }


  navigate() {
    debugger
    if (this.permission == 1)
     {  //this.router.navigate(['Manager/Student/'+this.student.IdStudent+'/ListTask', this.student.IdStudent])
     this.router.navigate(['Manager/Student/'+this.student.IdStudent+'/ListReport', this.student.IdStudent])
     this.router.navigate(['Manager/Student/'+this.student.IdStudent+'/ListTask', this.student.IdStudent])

    }
     else
     {      this.router.navigate(['Diagnostic/Student/'+this.student.IdStudent+'/ListReport', this.student.IdStudent])

       this.router.navigate(['Diagnostic/Student/'+this.student.IdStudent+'/ListTask', this.student.IdStudent])
     }
  }
}
