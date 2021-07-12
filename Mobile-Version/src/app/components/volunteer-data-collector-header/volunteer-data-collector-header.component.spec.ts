import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VolunteerDataCollectorHeaderComponent } from './volunteer-data-collector-header.component';

describe('VolunteerDataCollectorHeaderComponent', () => {
  let component: VolunteerDataCollectorHeaderComponent;
  let fixture: ComponentFixture<VolunteerDataCollectorHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerDataCollectorHeaderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VolunteerDataCollectorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
