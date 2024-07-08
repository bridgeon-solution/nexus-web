import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaySlipComponent } from './pay-slip.component';

describe('PaySlipComponent', () => {
  let component: PaySlipComponent;
  let fixture: ComponentFixture<PaySlipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaySlipComponent]
    });
    fixture = TestBed.createComponent(PaySlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
