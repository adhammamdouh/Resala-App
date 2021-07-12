import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VolunteerDataCollectorBodyComponent } from './volunteer-data-collector-body.component';

describe('VolunteerDataCollectorBodyComponent', () => {
  let component: VolunteerDataCollectorBodyComponent;
  let fixture: ComponentFixture<VolunteerDataCollectorBodyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerDataCollectorBodyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VolunteerDataCollectorBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
