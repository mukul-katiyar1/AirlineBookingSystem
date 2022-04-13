import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedForgotOtpComponent } from './combined-forgot-otp.component';

describe('CombinedForgotOtpComponent', () => {
  let component: CombinedForgotOtpComponent;
  let fixture: ComponentFixture<CombinedForgotOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinedForgotOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinedForgotOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
