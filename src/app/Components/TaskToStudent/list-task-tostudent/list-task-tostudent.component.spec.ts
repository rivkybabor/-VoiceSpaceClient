import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaskTostudentComponent } from './list-task-tostudent.component';

describe('ListTaskTostudentComponent', () => {
  let component: ListTaskTostudentComponent;
  let fixture: ComponentFixture<ListTaskTostudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTaskTostudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTaskTostudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
