import { inject, Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { Person, Scorer } from '../Resources/person';
import { map } from 'rxjs';
import { Match } from '../Resources/match';
import { MatchService } from './match-service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
    private readonly api = inject(ApiService)

    private readonly matchService = inject(MatchService);

    getPerson(id: number) {
      return this.api.get<Person>(`/persons/${id}`);
    }

    getTopScorers() {
      return this.api.get<{scorers: Scorer[]}>(
        "/competitions/PL/scorers", { 
          season: 2025, 
          limit: 10
        }).pipe(
          map(response => response.scorers)
        );
    }


    getTopAssists() {
      return this.api.get<{scorers: Scorer[]}>(
        "/competitions/PL/scorers", { 
          season: 2025, 
          limit: 50
        }).pipe(
          map(response => response.scorers
          .filter(assist => assist.assists > 0)
          .sort((a, b) => b.assists - a.assists)
          .slice(0, 10)
        ));
    }

    getMatchesForPlayer(playerId: number, season: number) {
      return this.api.get<{ matches: Match[] }>(`/persons/${playerId}/matches`, {
        season
      }).pipe(
        map(response => response.matches)
      );
    }


}
