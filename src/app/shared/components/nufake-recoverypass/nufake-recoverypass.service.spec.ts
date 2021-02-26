import { TestBed } from '@angular/core/testing';

import { NufakeRecoverypassService } from './nufake-recoverypass.service';

describe('NufakeRecoverypassService', () => {
  let service: NufakeRecoverypassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NufakeRecoverypassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
