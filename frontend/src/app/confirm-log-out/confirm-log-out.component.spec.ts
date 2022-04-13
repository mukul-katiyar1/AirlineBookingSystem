import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmLogOutComponent } from './confirm-log-out.component';

describe('ConfirmLogOutComponent', () => {
  let component: ConfirmLogOutComponent;
  let fixture: ComponentFixture<ConfirmLogOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmLogOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmLogOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
