import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayFlighListComponent } from './two-way-fligh-list.component';

describe('TwoWayFlighListComponent', () => {
  let component: TwoWayFlighListComponent;
  let fixture: ComponentFixture<TwoWayFlighListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayFlighListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayFlighListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
