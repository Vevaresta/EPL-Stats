import { Component, computed, input } from '@angular/core';
import type { Team as TeamModel } from '../../Resources/team';
@Component({
  selector: 'app-team-badge',
  imports: [],
  templateUrl: './team-badge.html',
  styleUrl: './team-badge.css'
})
export class TeamBadge {
  readonly team = input<TeamModel | undefined>();
  readonly displayCrest = computed(() => this.team()?.crest ?? null);

}
