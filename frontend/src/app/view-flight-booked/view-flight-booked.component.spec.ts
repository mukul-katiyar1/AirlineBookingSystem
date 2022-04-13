import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFlightBookedComponent } from './view-flight-booked.component';

describe('ViewFlightBookedComponent', () => {
  let component: ViewFlightBookedComponent;
  let fixture: ComponentFixture<ViewFlightBookedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFlightBookedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFlightBookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
