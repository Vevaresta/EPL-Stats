import { inject, Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { Competition, LeagueStandingResponse } from '../Resources/competition';
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
          season: 2025
        }).pipe(
          map(response => response.standings.find(
            standing => standing.type ==="TOTAL")?.table ?? [])
          );
    }

    getLeagueTable(competitionCode: string, season: number) {
      return this.api.get<{ standings: any[] }>(`competitions/${competitionCode}/standings`, {
        season,
      }).pipe(
        map((res) => res.standings[0].table)
      );
    }
}
