import { inject, Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { Team } from '../Resources/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
    private readonly api = inject(ApiService);

    getTeam(id: number) {
      return this.api.get<Team>(`/teams/${id}`);
    }
  
}
