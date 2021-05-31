import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFirstDiagnosisComponent } from './list-first-diagnosis.component';

describe('ListFirstDiagnosisComponent', () => {
  let component: ListFirstDiagnosisComponent;
  let fixture: ComponentFixture<ListFirstDiagnosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFirstDiagnosisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFirstDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
