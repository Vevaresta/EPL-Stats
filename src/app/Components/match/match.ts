import { Component, inject } from '@angular/core';
import { MatchService } from '../../Services/match-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-match',
  imports: [DatePipe],
  templateUrl: './match.html',
  styleUrl: './match.css'
})
export class Match {
  private readonly matchService = inject(MatchService);

  readonly liverpoolMatches = toSignal(
    this.matchService.getLiverpoolMatches2024(),
    { initialValue: []}
  )

}
