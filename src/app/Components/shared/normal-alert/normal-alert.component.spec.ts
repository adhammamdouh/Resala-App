import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalAlertComponent } from './normal-alert.component';

describe('NormalAlertComponent', () => {
  let component: NormalAlertComponent;
  let fixture: ComponentFixture<NormalAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
