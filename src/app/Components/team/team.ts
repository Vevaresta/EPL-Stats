import { Component, inject } from '@angular/core';
import { ApiService } from '../../Services/api-service';
import { TeamService } from '../../Services/team-service';

@Component({
  selector: 'app-team',
  imports: [],
  templateUrl: './team.html',
  styleUrl: './team.css'
})
export class Team {
    private readonly teamService = inject(TeamService);
}
