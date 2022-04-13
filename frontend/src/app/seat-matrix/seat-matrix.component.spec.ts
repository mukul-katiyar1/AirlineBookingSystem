import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatMatrixComponent } from './seat-matrix.component';

describe('SeatMatrixComponent', () => {
  let component: SeatMatrixComponent;
  let fixture: ComponentFixture<SeatMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
