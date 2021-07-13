import { TestBed } from '@angular/core/testing';

import { VolunteerCRUDService } from './volunteer-crud.service';

describe('VolunteerCRUDService', () => {
  let service: VolunteerCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolunteerCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
