import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDiagnosisComponent } from './first-diagnosis.component';

describe('FirstDiagnosisComponent', () => {
  let component: FirstDiagnosisComponent;
  let fixture: ComponentFixture<FirstDiagnosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstDiagnosisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
