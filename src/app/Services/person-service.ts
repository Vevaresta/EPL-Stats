import { inject, Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { Person, Scorer } from '../Resources/person';
import { map } from 'rxjs';
import { Match } from '../Resources/match';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
    private readonly api = inject(ApiService)

    getPerson(id: number) {
      return this.api.get<Person>(`/persons/${id}`);
    }

    getTopScorers() {
      return this.api.get<{scorers: Scorer[]}>(
        "/competitions/PL/scorers", { 
          season: 2024, 
          limit: 10
        }).pipe(
          map(response => response.scorers)
        );
    }

    getMatchesForPlayer(playerId: number, season: number) {
      return this.api.get<{ matches: Match[] }>(`/persons/${playerId}/matches`, {
        season
      }).pipe(
        map(res => res.matches)
      );
    }
}
