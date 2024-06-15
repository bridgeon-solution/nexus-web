import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendLeaveComponent } from './send-leave.component';

describe('SendLeaveComponent', () => {
  let component: SendLeaveComponent;
  let fixture: ComponentFixture<SendLeaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendLeaveComponent]
    });
    fixture = TestBed.createComponent(SendLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
