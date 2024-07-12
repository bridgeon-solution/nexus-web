import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopProfileComponent } from './top-profile.component';

describe('TopProfileComponent', () => {
  let component: TopProfileComponent;
  let fixture: ComponentFixture<TopProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopProfileComponent]
    });
    fixture = TestBed.createComponent(TopProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
