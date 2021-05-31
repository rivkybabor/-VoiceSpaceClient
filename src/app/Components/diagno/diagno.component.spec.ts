import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnoComponent } from './diagno.component';

describe('DiagnoComponent', () => {
  let component: DiagnoComponent;
  let fixture: ComponentFixture<DiagnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
