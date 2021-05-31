import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskToStudentComponent } from './new-task-to-student.component';

describe('NewTaskToStudentComponent', () => {
  let component: NewTaskToStudentComponent;
  let fixture: ComponentFixture<NewTaskToStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTaskToStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTaskToStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
