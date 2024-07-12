import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaySlipComponent } from './view-pay-slip.component';

describe('ViewPaySlipComponent', () => {
  let component: ViewPaySlipComponent;
  let fixture: ComponentFixture<ViewPaySlipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPaySlipComponent]
    });
    fixture = TestBed.createComponent(ViewPaySlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
