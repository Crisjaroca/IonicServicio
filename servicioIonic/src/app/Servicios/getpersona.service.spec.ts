import { TestBed } from '@angular/core/testing';

import { GetpersonaService } from './getpersona.service';

describe('GetpersonaService', () => {
  let service: GetpersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetpersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
