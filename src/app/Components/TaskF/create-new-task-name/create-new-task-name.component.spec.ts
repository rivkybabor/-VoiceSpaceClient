import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewTaskNameComponent } from './create-new-task-name.component';

describe('CreateNewTaskNameComponent', () => {
  let component: CreateNewTaskNameComponent;
  let fixture: ComponentFixture<CreateNewTaskNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewTaskNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewTaskNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
