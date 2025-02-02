import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChatComponent } from './view-chat.component';

describe('ViewChatComponent', () => {
  let component: ViewChatComponent;
  let fixture: ComponentFixture<ViewChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewChatComponent]
    });
    fixture = TestBed.createComponent(ViewChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
