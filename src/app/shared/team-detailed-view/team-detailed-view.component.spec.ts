import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDetailedViewComponent } from './team-detailed-view.component';

describe('TeamDetailedViewComponent', () => {
  let component: TeamDetailedViewComponent;
  let fixture: ComponentFixture<TeamDetailedViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamDetailedViewComponent]
    });
    fixture = TestBed.createComponent(TeamDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
