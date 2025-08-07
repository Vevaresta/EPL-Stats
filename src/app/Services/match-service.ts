import { inject, Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { Match } from '../Resources/match';

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
}
