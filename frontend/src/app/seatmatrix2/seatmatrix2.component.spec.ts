import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Seatmatrix2Component } from './seatmatrix2.component';

describe('Seatmatrix2Component', () => {
  let component: Seatmatrix2Component;
  let fixture: ComponentFixture<Seatmatrix2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Seatmatrix2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Seatmatrix2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
