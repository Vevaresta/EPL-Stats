import { inject, Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { Competition, LeagueStandingResponse } from '../Resources/competition';
import { Team } from '../Resources/team';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
    private readonly api = inject(ApiService);

    getCompetition(id: string) {
      return this.api.get<Competition>(`/competitions/${id}`);
    }
  
    getPremierLeagueTable() {
      return this.api.get<LeagueStandingResponse>(
        "/competitions/PL/standings", {
          matchday: 38,
          season: 2024
        }).pipe(
          map(response => response.standings.find(
            standing => standing.type ==="TOTAL")?.table ?? [])
          );
    }
}
