import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { Task } from 'src/app/Classes/Task';
import { ConvertDateService } from 'src/app/Services/convert-date.service';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private route: Router, private router: ActivatedRoute, private TaskSer: TaskService, private convertDateSer: ConvertDateService) {
  }

  
  

  task: Task;
  ngOnInit(): void {

    if (this.TaskSer.currentListTask != null && this.TaskSer.currentListTask != undefined) {
      this.task = this.TaskSer.currentListTask.find(t => t.IdTask == parseInt(this.router.snapshot.paramMap.get('id')))

    }
    
    // else {
    //   this.TaskSer.getTaskByIdTask(parseInt(this.router.snapshot.paramMap.get('id'))).subscribe(
    //     myData => {
    //       this.task = myData
    //       {
    //         if (this.task.StartDate != null)
    //           this.convertDateSer.getHebrew(this.task.StartDate).subscribe(
    //             startDate => {

    //               this.task.StartDateHebrew = startDate.hebrew
    //             }
    //           )
    //         if (this.task.EndDate != null)
    //           this.convertDateSer.getHebrew(this.task.EndDate).subscribe(
    //             endDate => {

    //               this.task.EndDateHebrew = endDate.hebrew
    //             }

    //           )

    //       }
    //     })
    // }
  }
}




