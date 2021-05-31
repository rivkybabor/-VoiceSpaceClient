
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  NgbCalendar,
  NgbCalendarHebrew, NgbDate,
  NgbDatepickerI18n,
  NgbDatepickerI18nHebrew,
  NgbDateStruct
} from '@ng-bootstrap/ng-bootstrap';
import {LevelService} from 'src/app/Services/level.service';
import {level} from 'src/app/Classes/level';
import { StatusService } from 'src/app/Services/status.service';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-new-task-to-student',
  templateUrl: './new-task-to-student.component.html',
  styleUrls: ['./new-task-to-student.component.css']
})
export class NewTaskToStudentComponent implements OnInit {

  constructor(private levelSer:LevelService) { }
  levelList:Array<level>=new Array<level>();
  ngOnInit(): void {
    this.levelSer.getLevel().subscribe(data=>this.levelList=data);
  }

newTaskToStudentForm=new FormGroup({});
}
