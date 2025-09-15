import { inject, Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { Competition, LeagueStandingResponse } from '../Resources/competition';
import { forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
    private readonly api = inject(ApiService);

    getCompetition(id: string) {
      return this.api.get<Competition>(`/competitions/${id}`);
    }
  
    // get current league table for all teams
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

    getTopPerformingTeams(season: number) {
      const leagues = ["PL", "PD", "SA", "BL1", "FL1"];

      return forkJoin(
        leagues.map(code =>
          this.getLeagueTable(code, season).pipe(
            map(table => table.slice(0, 5))
          )
        )
      ).pipe(
        map(results => results.flat()),
        map(teams =>
          teams
            .sort((a, b) => b.points - a.points)
            .slice(0, 10)

        )
      );
    }
}
