import { TestBed } from '@angular/core/testing';

import { FatchDataService } from './fatch-data.service';

describe('FatchDataService', () => {
  let service: FatchDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FatchDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
