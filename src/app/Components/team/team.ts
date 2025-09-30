import { Component, computed, inject } from '@angular/core';
import { TeamService } from '../../Services/team-service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatchService } from '../../Services/match-service';
import { CompetitionService } from '../../Services/competition-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-team',
  imports: [CommonModule, RouterModule],
  templateUrl: './team.html',
  styleUrl: './team.css'
})
export class Team {
    private readonly route = inject(ActivatedRoute);
    private readonly teamService = inject(TeamService);
    private readonly matchService = inject(MatchService);
    private readonly competitionService = inject(CompetitionService);

    readonly teamId = Number(this.route.snapshot.paramMap.get("id"));

    readonly club = toSignal(
      this.teamService.getTeam(this.teamId),
        { initialValue: null}
    );

    readonly matches = toSignal(
      this.matchService.getMatchesByTeam(this.teamId, 2025),
        { initialValue: [] }
    );

    readonly currentPosition = toSignal(
      this.competitionService.getLeagueTable("PL", 2025).pipe(
        map((table) => table.find((row: any) => row.team.id === this.teamId)),
        map((row) => row?.currentPosition ?? null)
      ),
        { initialValue: null}
      );

      readonly lastWinDate = computed(() => {
        const winMatch = this.matches().find(
          m =>       
            (m.homeTeam.id === this.teamId && m.score.winner === "HOME_TEAM") ||
            (m.awayTeam.id === this.teamId && m.score.winner === "AWAY_TEAM")
        );
        return winMatch?.utcDate ?? "N/A";
      })

      readonly lastLossDate = computed(() => {
        const lossMatch = this.matches().find(
          m =>
            (m.homeTeam.id === this.teamId && m.score.winner === "AWAY_TEAM") ||
            (m.awayTeam.id === this.teamId && m.score.winner === "HOME_TEAM")
        );
        return lossMatch?.utcDate ?? "N/A";
      });
}
