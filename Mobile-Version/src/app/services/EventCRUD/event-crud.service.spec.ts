import { TestBed } from '@angular/core/testing';

import { EventCRUDService } from './event-crud.service';

describe('EventCRUDService', () => {
  let service: EventCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
