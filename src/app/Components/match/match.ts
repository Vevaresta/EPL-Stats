import { Component, inject } from '@angular/core';
import { MatchService } from '../../Services/match-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Match as MatchModel }  from '../../Resources/match';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-match',
  imports: [RouterLink, CommonModule],
  templateUrl: './match.html',
  styleUrl: './match.css'
})
export class Match {
  
    private readonly matchService = inject(MatchService);

    readonly upcomingMatchesTop5Leagues = toSignal(
      this.matchService.getUpcomingMatchesTop5Leagues(),
      { initialValue: [] as MatchModel[] }
    );
      



}
