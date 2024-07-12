import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTasksComponent } from './view-tasks.component';

describe('ViewTasksComponent', () => {
  let component: ViewTasksComponent;
  let fixture: ComponentFixture<ViewTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTasksComponent]
    });
    fixture = TestBed.createComponent(ViewTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
