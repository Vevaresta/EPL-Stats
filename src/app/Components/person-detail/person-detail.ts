import { Component, computed, inject } from '@angular/core';
import { PersonService } from '../../Services/person-service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { TeamBadge } from '../team-badge/team-badge';
import { MatchService } from '../../Services/match-service';
import { Match } from '../../Resources/match';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-person-detail',
  imports: [CommonModule, RouterModule, TeamBadge],
  templateUrl: './person-detail.html',
  styleUrl: './person-detail.css'
})
export class PersonDetail {

    private readonly personService = inject(PersonService);
    private readonly route = inject(ActivatedRoute);
    private readonly matchService = inject(MatchService);

    readonly personId = Number(this.route.snapshot.paramMap.get("id"));

    readonly person = toSignal(
      this.personService.getPerson(this.personId),
      { initialValue: null}
    )

    readonly playerMatches = toSignal(
      this.personService.getMatchesForPlayer(this.personId, 2021),
      { initialValue: [] as Match[] }
    );






}
