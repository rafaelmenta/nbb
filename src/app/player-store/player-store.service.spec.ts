import { TestBed, inject } from '@angular/core/testing';

import { PlayerStoreService } from './player-store.service';

describe('PlayerStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerStoreService]
    });
  });

  it('should be created', inject([PlayerStoreService], (service: PlayerStoreService) => {
    expect(service).toBeTruthy();
  }));
});
