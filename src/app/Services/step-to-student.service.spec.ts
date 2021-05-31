import { TestBed } from '@angular/core/testing';

import { StepToStudentService } from './step-to-student.service';

describe('StepToStudentService', () => {
  let service: StepToStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepToStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
