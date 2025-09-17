import { inject, Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { Person, Scorer } from '../Resources/person';
import { forkJoin, map } from 'rxjs';
import { Match } from '../Resources/match';
import { MatchService } from './match-service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
    private readonly api = inject(ApiService)

/*     private readonly matchService = inject(MatchService); */

    getPerson(id: number) {
      return this.api.get<Person>(`/persons/${id}`);
    }

/*     getTopScorers() {
      return this.api.get<{scorers: Scorer[]}>(
        "/competitions/PL/scorers", { 
          season: 2025, 
          limit: 10
        }).pipe(
          map(response => response.scorers)
        );
    } */

    getMatchesForPlayer(playerId: number, season: number) {
      return this.api.get<{ matches: Match[] }>(`/persons/${playerId}/matches`, {
        season
      }).pipe(
        map(response => response.matches)
      );
    }

    getTopScorersTop5Leagues(limit = 10) {
      const top5Leagues = ["PL", "BL1", "SA", "PD", "FL1"];

      return forkJoin(
        top5Leagues.map(code =>
          this.api.get<{ scorers: Scorer[] }>(`/competitions/${code}/scorers`, {
            season: 2025
          }).pipe(map(response => response.scorers))
        )
      ).pipe(
        map(arrays => arrays.flat()),
        map(scorers => scorers.sort((a, b) => b.goals - a.goals)),
        map(sorted => sorted.slice(0, limit))
      );
    }



}
