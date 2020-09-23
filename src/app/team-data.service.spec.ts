import { TestBed } from '@angular/core/testing';

import { TeamDataService } from './team-data.service';

describe('TeamDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamDataService = TestBed.get(TeamDataService);
    expect(service).toBeTruthy();
  });
});
