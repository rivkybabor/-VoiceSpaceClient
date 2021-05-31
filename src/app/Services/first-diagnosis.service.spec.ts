import { TestBed } from '@angular/core/testing';

import { FirstDiagnosisService } from './first-diagnosis.service';

describe('FirstDiagnosisService', () => {
  let service: FirstDiagnosisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstDiagnosisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
