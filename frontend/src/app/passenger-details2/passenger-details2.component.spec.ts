import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerDetails2Component } from './passenger-details2.component';

describe('PassengerDetails2Component', () => {
  let component: PassengerDetails2Component;
  let fixture: ComponentFixture<PassengerDetails2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerDetails2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
