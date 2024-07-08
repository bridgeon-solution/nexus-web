import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadPaySlipComponent } from './download-pay-slip.component';

describe('DownloadPaySlipComponent', () => {
  let component: DownloadPaySlipComponent;
  let fixture: ComponentFixture<DownloadPaySlipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadPaySlipComponent]
    });
    fixture = TestBed.createComponent(DownloadPaySlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
