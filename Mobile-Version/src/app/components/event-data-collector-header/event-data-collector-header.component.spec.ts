import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventDataCollectorHeaderComponent } from './event-data-collector-header.component';

describe('EventDataCollectorHeaderComponent', () => {
  let component: EventDataCollectorHeaderComponent;
  let fixture: ComponentFixture<EventDataCollectorHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDataCollectorHeaderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventDataCollectorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
