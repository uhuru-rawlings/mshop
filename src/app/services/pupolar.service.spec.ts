import { TestBed } from '@angular/core/testing';

import { PupolarService } from './pupolar.service';

describe('PupolarService', () => {
  let service: PupolarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PupolarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
