import { TestBed } from '@angular/core/testing';

import { CallsCRUDService } from './calls-crud.service';

describe('CallsCRUDService', () => {
  let service: CallsCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallsCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
