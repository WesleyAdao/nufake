import { TestBed } from '@angular/core/testing';

import { NufakeLoginService } from './nufake-login.service';

describe('NufakeLoginService', () => {
  let service: NufakeLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NufakeLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
