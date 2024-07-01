import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToTeamComponent } from './add-to-team.component';

describe('AddToTeamComponent', () => {
  let component: AddToTeamComponent;
  let fixture: ComponentFixture<AddToTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddToTeamComponent]
    });
    fixture = TestBed.createComponent(AddToTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
