import { TestBed } from '@angular/core/testing';

import { NufakeDashService } from './nufake-dash.service';

describe('NufakeDashService', () => {
  let service: NufakeDashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NufakeDashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
