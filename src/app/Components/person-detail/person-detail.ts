import { Component, inject } from '@angular/core';
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

    readonly playerMatches = toSignal(
      this.personService.getMatchesForPlayer(this.personId, 2021),
      { initialValue: [] as Match[] }
    );

      

}
