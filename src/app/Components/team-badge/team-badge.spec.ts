import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBadge } from './team-badge';

describe('TeamBadge', () => {
  let component: TeamBadge;
  let fixture: ComponentFixture<TeamBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamBadge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamBadge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
