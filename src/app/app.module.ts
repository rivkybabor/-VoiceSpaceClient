import { BrowserModule } from '@angular/platform-browser';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { WavesModule, TableModule, IconsModule } from 'angular-bootstrap-md';

import { NgModule,NO_ERRORS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './Components/app-routing.module';
import { AppComponent } from './Components/app.component';
import { LoginComponent } from './Components/login/login.component';

// Material Form Controls
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Layout
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ManagerComponent } from './Components/manager/manager.component';
import { DiagnosticComponent } from './Components/DiagnosticF/diagnostic/diagnostic.component';
import { ListDiagnosticComponent } from './Components/DiagnosticF/list-diagnostic/list-diagnostic.component';

import { ListStudentComponent } from './Components/StudentF/list-student/list-student.component';
import { NewDiagnosticComponent } from './Components/DiagnosticF/new-diagnostic/new-diagnostic.component';
import { TaskComponent } from './Components/TaskF/task/task.component';
import { ListTaskComponent } from './Components/TaskF/list-task/list-task.component';
import { ListStepsComponent } from './Components/StepF/list-steps/list-steps.component';
import { NewTaskComponent } from './Components/TaskF/new-task/new-task.component';
import { NewStepComponent } from './Components/StepF/new-step/new-step.component';
import { EditStepComponent } from './Components/StepF/edit-step/edit-step.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DiagnoComponent } from './Components/diagno/diagno.component';
import { StudentWaitingToConfirmComponent } from './Components/StudentF/student-waiting-to-confirm/student-waiting-to-confirm.component';
import { ConfirmStudentDialogComponent } from './Components/StudentF/confitm-student-dialog/confirm-student-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentComponent } from './Components/StudentF/student/student.component';
// import { CreateNewTaskNameComponent } from './Components/TaskF/create-new-task-name/create-new-task-name.component';
import { CreateNewTaskNameComponent } from './Components/TaskF/create-new-task-name/create-new-task-name.component';
// src\app\Components\TaskF\create-new-task-name\create-new-task-name.component.ts
import { AuthGuard } from './auth.guard';
import { ListReportComponent } from './Components/ReportF/list-report/list-report.component';
import { ReportComponent } from './Components/ReportF/report/report.component';
import { NewReportComponent } from './Components/ReportF/new-report/new-report.component';
import { LinebreaksPipePipe } from './Pipes/linebreaks-pipe.pipe';
import { FirstDiagnosisComponent } from './Components/FirstDiagnosis/first-diagnosis/first-diagnosis.component';
import { ListFirstDiagnosisComponent } from './Components/FirstDiagnosis/list-first-diagnosis/list-first-diagnosis.component';

import { NewTaskToStudentComponent } from './Components/TaskToStudent/new-task-to-student/new-task-to-student.component';

import { ListTaskTostudentComponent } from './Components/TaskToStudent/list-task-tostudent/list-task-tostudent.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManagerComponent,
    DiagnosticComponent,
    ListDiagnosticComponent,
    StudentComponent,
    ListStudentComponent,
    NewDiagnosticComponent,
    TaskComponent,
    ListTaskComponent,
    ListStepsComponent,
    NewTaskComponent,
    NewStepComponent,
    EditStepComponent,
    
    NavbarComponent,
    DiagnoComponent,
    StudentWaitingToConfirmComponent,
    ConfirmStudentDialogComponent,
    CreateNewTaskNameComponent,
    ListReportComponent,
    ReportComponent,
    NewReportComponent,
    LinebreaksPipePipe,
    FirstDiagnosisComponent,
    ListFirstDiagnosisComponent,
   
    NewTaskToStudentComponent,
    
    ListTaskTostudentComponent,

  ],
  entryComponents: [
    NewStepComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),

    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    BrowserAnimationsModule,
    NgbModule,


  ],
  exports: [
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
