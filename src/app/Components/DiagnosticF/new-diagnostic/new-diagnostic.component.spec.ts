import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDiagnosticComponent } from './new-diagnostic.component';

describe('NewDiagnosticComponent', () => {
  let component: NewDiagnosticComponent;
  let fixture: ComponentFixture<NewDiagnosticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDiagnosticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
