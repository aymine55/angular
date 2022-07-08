import { TestBed } from '@angular/core/testing';

import { NoguardcandidatGuard } from './noguardcandidat.guard';

describe('NoguardcandidatGuard', () => {
  let guard: NoguardcandidatGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoguardcandidatGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
