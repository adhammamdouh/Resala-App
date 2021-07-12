import { TestBed } from '@angular/core/testing';

import { PrivilegeHandlerService } from './privilege-handler.service';

describe('PrivilegeHandlerService', () => {
  let service: PrivilegeHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivilegeHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
