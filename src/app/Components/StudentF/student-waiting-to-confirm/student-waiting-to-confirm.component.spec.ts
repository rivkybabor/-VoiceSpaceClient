import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentWaitingToConfirmComponent } from './student-waiting-to-confirm.component';

describe('StudentWaitingToConfirmComponent', () => {
  let component: StudentWaitingToConfirmComponent;
  let fixture: ComponentFixture<StudentWaitingToConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentWaitingToConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentWaitingToConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
