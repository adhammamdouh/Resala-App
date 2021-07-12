import { TestBed } from '@angular/core/testing';

import { RestfulAPIHandlerService } from './restful-apihandler.service';

describe('RestfulAPIHandlerService', () => {
  let service: RestfulAPIHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestfulAPIHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
