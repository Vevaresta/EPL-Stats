import { inject, Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { Competition } from '../Resources/competition';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
    private readonly api = inject(ApiService);

    getCompetition(id: string) {
      return this.api.get<Competition>(`/competitions/${id}`);
    }
  
}
