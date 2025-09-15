import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPerformingTeams } from './top-performing-teams';

describe('TopPerformingTeams', () => {
  let component: TopPerformingTeams;
  let fixture: ComponentFixture<TopPerformingTeams>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopPerformingTeams]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopPerformingTeams);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
