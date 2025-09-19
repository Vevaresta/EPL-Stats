import { inject, Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { Match } from '../Resources/match';
import { forkJoin, map, Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private readonly api = inject(ApiService)
  private readonly top5Leagues = ["PL", "PD", "SA", "BL1", "FL1"];

  getAllMatches() {
    return this.api.get<{ matches: Match[] }>("/matches");
  }

  getMatch(id: number) {
    return this.api.get<Match>(`/matches/${id}`);
  }

  getMatchesByCompetitionAndDate(competitionCode: string, date: string) {
    return this.api.get<{ matches: Match[] }>("/matches", {
      competitions: competitionCode,
      dateFrom: date,
      dateTo: date,
    });
  }


  getMatchesByCompetitionAndMatchday(competitionCode: string, season: number, matchday: number) {
    return this.api.get<{ matches: Match[] }>(`/competitions/${competitionCode}/matches`, {
      season,
      matchday
    }).pipe(
      map(response => response.matches)
    );
  }

  getMatchesByTeam(teamId: number, season: number) {
    return this.api.get<{ matches: Match[] }>(`/teams/${teamId}/matches`, {
      season
    }).pipe(
      map(res => res.matches)
    );
  }

  // for home page upcoming matches
  getUpcomingMatches(): Observable<any[]> {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    const dateFrom = today.toISOString().split("T")[0];
    const dateTo = nextWeek.toISOString().split("T")[0];

    const requests = this.top5Leagues.map(code =>
      this.api.get<any>(`/competitions/${code}/matches`, {
        dateFrom,
        dateTo
      })
    );
    return forkJoin(requests).pipe(
      map(responses => responses
          .map(r => r.matches.flat())
          .sort((a, b) => new Date(a.utcDate).getTime() - new Date(b.utcDate).getTime())
      )
    );
  }

}
