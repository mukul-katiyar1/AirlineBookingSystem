import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFlightCardComponent } from './search-flight-card.component';

describe('SearchFlightCardComponent', () => {
  let component: SearchFlightCardComponent;
  let fixture: ComponentFixture<SearchFlightCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFlightCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFlightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
