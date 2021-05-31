import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmStudentDialogComponent } from './confirm-student-dialog.component';

describe('ConfirmStudentDialogComponent', () => {
  let component: ConfirmStudentDialogComponent;
  let fixture: ComponentFixture<ConfirmStudentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmStudentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmStudentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
