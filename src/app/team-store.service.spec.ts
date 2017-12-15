import { TestBed, inject } from '@angular/core/testing';

import { TeamStoreService } from './team-store.service';

describe('TeamStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamStoreService]
    });
  });

  it('should be created', inject([TeamStoreService], (service: TeamStoreService) => {
    expect(service).toBeTruthy();
  }));
});
