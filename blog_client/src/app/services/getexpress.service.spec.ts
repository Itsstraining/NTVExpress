import { TestBed } from '@angular/core/testing';

import { GetexpressService } from './getexpress.service';

describe('GetexpressService', () => {
  let service: GetexpressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetexpressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
