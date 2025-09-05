import { inject, Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { Match } from '../Resources/match';
import { map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private readonly api = inject(ApiService)

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


         
  
  // todo: get matches by matchday 
}
