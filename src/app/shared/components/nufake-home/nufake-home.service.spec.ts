import { TestBed } from '@angular/core/testing';

import { NufakeHomeService } from './nufake-home.service';

describe('NufakeHomeService', () => {
  let service: NufakeHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NufakeHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
