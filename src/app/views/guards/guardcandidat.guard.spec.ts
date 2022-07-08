import { TestBed } from '@angular/core/testing';

import { GuardcandidatGuard } from './guardcandidat.guard';

describe('GuardcandidatGuard', () => {
  let guard: GuardcandidatGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardcandidatGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
