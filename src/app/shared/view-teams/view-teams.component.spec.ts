import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTeamsComponent } from './view-teams.component';

describe('ViewTeamsComponent', () => {
  let component: ViewTeamsComponent;
  let fixture: ComponentFixture<ViewTeamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTeamsComponent]
    });
    fixture = TestBed.createComponent(ViewTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
