import { Component, computed, inject } from '@angular/core';
import { CompetitionService } from '../../Services/competition-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { TeamBadge } from "../team-badge/team-badge";

@Component({
  selector: 'app-top-performing-teams',
  imports: [TeamBadge],
  templateUrl: './top-performing-teams.html',
  styleUrl: './top-performing-teams.css'
})
export class TopPerformingTeams {
    
    private readonly competitionService = inject(CompetitionService);

    readonly topTeams = toSignal(
      this.competitionService.getTopPerformingTeams(2025),
        { initialValue: [] }
    )

    readonly teamsWithStats = computed(() =>
      this.topTeams().map(team => {
        const gamesPlayed = team.playedGames ?? 0;
        const avgPoints = team.points / gamesPlayed;
        const avgGoals = team.goalsFor / gamesPlayed;

        return {
          ...team,
          form: team.form?.split("").reverse().join("") ?? "",
          avgPoints: Number(avgPoints.toFixed(3)),
          avgGoals: Number(avgGoals.toFixed(3)),
        };
      })
    );
      
}
