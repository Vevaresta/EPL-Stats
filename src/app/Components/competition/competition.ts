import { Component, inject } from '@angular/core';
import { CompetitionService } from '../../Services/competition-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-competition',
  imports: [],
  templateUrl: './competition.html',
  styleUrl: './competition.css'
})
export class Competition {
    private readonly competitionService = inject(CompetitionService);

    readonly leagueTable = toSignal(
      this.competitionService.getPremierLeagueTable(),
      { initialValue: []}
    );
}
