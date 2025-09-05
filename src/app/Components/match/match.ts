import { Component, inject, signal } from '@angular/core';
import { MatchService } from '../../Services/match-service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { switchMap } from 'rxjs';
import { Match as MatchModel } from '../../Resources/match';


@Component({
  selector: 'app-match',
  imports: [DatePipe],
  templateUrl: './match.html',
  styleUrl: './match.css'
})
export class Match {
  private readonly matchService = inject(MatchService);


  readonly weeks: number[] = Array.from({ length: 38}, (_, i) => i +1);
  readonly selectedMatchday = signal(1);
  readonly open = signal(false);

  readonly matches = toSignal(
    toObservable(this.selectedMatchday).pipe(
      switchMap(week =>
        this.matchService.getMatchesByCompetitionAndMatchday("PL", 2025, week)
      )
    ),
    { initialValue: [] as MatchModel[] }
  );

  // TODO matches in current season per week


}
