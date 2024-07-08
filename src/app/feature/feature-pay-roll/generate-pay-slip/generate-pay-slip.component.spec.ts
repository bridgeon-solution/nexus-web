import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePaySlipComponent } from './generate-pay-slip.component';

describe('GeneratePaySlipComponent', () => {
  let component: GeneratePaySlipComponent;
  let fixture: ComponentFixture<GeneratePaySlipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratePaySlipComponent]
    });
    fixture = TestBed.createComponent(GeneratePaySlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
