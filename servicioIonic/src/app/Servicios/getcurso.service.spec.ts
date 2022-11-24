import { TestBed } from '@angular/core/testing';

import { GetcursoService } from './getcurso.service';

describe('GetcursoService', () => {
  let service: GetcursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
