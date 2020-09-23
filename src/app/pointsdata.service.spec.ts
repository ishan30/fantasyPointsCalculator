import { TestBed } from '@angular/core/testing';

import { PointsdataService } from './pointsdata.service';

describe('PointsdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PointsdataService = TestBed.get(PointsdataService);
    expect(service).toBeTruthy();
  });
});
