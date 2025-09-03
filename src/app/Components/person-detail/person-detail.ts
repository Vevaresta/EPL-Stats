import { Component, computed, inject, input, signal } from '@angular/core';
import { PersonService } from '../../Services/person-service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { TeamBadge } from '../team-badge/team-badge';
import { Match } from '../../Resources/match';

@Component({
  selector: 'app-person-detail',
  imports: [CommonModule, RouterModule, TeamBadge],
  templateUrl: './person-detail.html',
  styleUrl: './person-detail.css'
})
export class PersonDetail {

    private readonly personService = inject(PersonService);
    private readonly route = inject(ActivatedRoute);

    readonly personId = Number(this.route.snapshot.paramMap.get("id"));

    readonly person = toSignal(
      this.personService.getPerson(this.personId),
      { initialValue: null}
    )

    readonly matches = signal<ReadonlyArray<Match>>([]);

    readonly totalMatches = computed(() => this.matches().length);

    readonly firstMatchDate = computed(() => {
      if (!this.matches().length) 
        return null;
      return this.matches()
        .map(match => new Date(match.utcDate))
        .sort((earlier, later) => earlier.getTime() - later.getTime())[0];
    });

    readonly lastMatchDate = computed(() => {
      if (!this.matches().length)
        return null;
      return this.matches()
        .map(match => new Date(match.utcDate))
        .sort((earlier, later) => later.getTime() - earlier.getTime())[0];      
    });

    setMatches(allMatches: Match[]) {
      const playerTeamId = this.person()?.currentTeam?.id;
        if (!playerTeamId) return;
      
        const teamMatches = allMatches.filter(
          match => match.homeTeam.id === playerTeamId || match.awayTeam.id === playerTeamId
        );

        this.matches.set(teamMatches);
    }

}
