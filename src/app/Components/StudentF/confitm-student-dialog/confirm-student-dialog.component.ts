import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { student } from 'src/app/Classes/student';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-confirm-student-dialog',
  templateUrl: './confirm-student-dialog.component.html',
  styleUrls: ['./confirm-student-dialog.component.css']
})
export class ConfirmStudentDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmStudentDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {student:student},private studentSer:StudentService) {}

  ngOnInit(): void {
  }
  addStudent()
  {
    this.data.student.Certified=true
    this.studentSer.addOrUpdateStudent(this.data.student).subscribe(
      myData=>
      {
        if(this.studentSer.AllStudent!=null && this.studentSer.AllStudent!=undefined)
        this.studentSer.AllStudent.push(myData);
        this.closeDialog(myData)
      }
    )
  }
  removeStudent()
  {
    this.studentSer.removeStudent(this.data.student).subscribe(
      myData=>
      {
       this.closeDialog(myData)

      }
    )
  }

  closeDialog(confirmStudent) {
    this.dialogRef.close(confirmStudent);
  }
}
