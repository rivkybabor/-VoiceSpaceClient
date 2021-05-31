import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { DiagnosticComponent } from './DiagnosticF/diagnostic/diagnostic.component'
import { ListDiagnosticComponent } from './DiagnosticF/list-diagnostic/list-diagnostic.component';
import { ListStudentComponent } from './StudentF/list-student/list-student.component';
import { StudentComponent } from './StudentF/student/student.component';
import { NewDiagnosticComponent } from './DiagnosticF/new-diagnostic/new-diagnostic.component';
import { TaskComponent } from './TaskF/task/task.component';
import { ListTaskComponent } from './TaskF/list-task/list-task.component';
import { ListStepsComponent } from './StepF/list-steps/list-steps.component';
import { DiagnoComponent } from './diagno/diagno.component';
import { StudentWaitingToConfirmComponent } from './StudentF/student-waiting-to-confirm/student-waiting-to-confirm.component';
import { AuthGuard } from '../auth.guard';
import { ListReportComponent } from './ReportF/list-report/list-report.component';
import { NewStepComponent } from './StepF/new-step/new-step.component';
import{NewTaskComponent} from './TaskF/new-task/new-task.component';
import {NewTaskToStudentComponent} from './TaskToStudent/new-task-to-student/new-task-to-student.component';
const routes: Routes = [{ path: '', redirectTo: 'Login', pathMatch: 'full' },
{ path: 'Login', component: LoginComponent },
{path:'NewTasktoStudent',component:NewTaskToStudentComponent},

// {path:'NewTask',component:NewTaskComponent},

{ path: 'Manager', component: ManagerComponent,canActivate: [AuthGuard],

  children: [
    {path:'NewTasktoStudent',component:NewTaskToStudentComponent},
    { path: 'ListDiagnostic', component: ListDiagnosticComponent },
    { path: 'ListStudent', component: ListStudentComponent },
    { path: 'Diagnostic/:id', component: DiagnosticComponent },
    { path: 'Student/:id', component: StudentComponent ,children:
    [ { path:'ListTask/:id', component: ListTaskComponent , outlet: 'child1'},
    { path: 'ListReport/:id', component: ListReportComponent , outlet: 'child2'},
   ]},
    { path: 'NewDiagnostic/:id', component: NewDiagnosticComponent },
    { path: 'ListTask/:id', component: ListTaskComponent },

    { path: 'ListSteps/:id', component: ListStepsComponent },
    { path: 'Task/:id', component: TaskComponent },
    { path: 'StudentWaitingConfirm', component: StudentWaitingToConfirmComponent },
{ path: 'ListTask/:id', component: ListTaskComponent },
{ path: 'ListSteps/:id', component: ListStepsComponent },
  ]
},
// { path: 'Task/:id', component: TaskComponent },
// { path: 'ListTask/:id', component: ListTaskComponent },
// { path: 'ListSteps/:id', component: ListStepsComponent },
{ path: 'Student/:id', component: StudentComponent,canActivate: [AuthGuard],
},
{ path: 'Diagnostic', component: DiagnoComponent ,canActivate: [AuthGuard],
 children: [
  { path: 'ListStudent', component: ListStudentComponent },
  { path: 'Student/:id', component: StudentComponent,
  children:

  [ { path:'ListTask/:id', component: ListTaskComponent , outlet: 'child1'},
  { path: 'ListReport/:id', component: ListReportComponent , outlet: 'child2'},
 ]},
  { path: 'ListTask/:id', component: ListTaskComponent },
  { path: 'ListSteps/:id', component: ListStepsComponent },
  { path: 'Task/:id', component: TaskComponent },
{ path: 'ListTask/:id', component: ListTaskComponent },
{ path: 'ListSteps/:id', component: ListStepsComponent },
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
