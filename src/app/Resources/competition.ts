import { Area } from "./area";
import { Season } from "./match";

export interface Competition {
    readonly id: number;
    readonly name: string;
    readonly code: string;
    readonly type: CompetitionType;
    readonly emblem: string | null;
    readonly currentSeason: Season;
    readonly seasons: ReadonlyArray<Season>;
    readonly lastUpdated: string;
    readonly area: Area;

}

export enum CompetitionType {
    LEAGUE = "LEAGUE",
    LEAGUE_CUP = "LEAGUE_CUP",
    CUP = "CUP",
    PLAYOFFS = "PLAYOFFS"
}

export interface LeagueStandingResponse {
  standings: Array<{
    type: string;
    table: Array<{
      position: number;
      team: {
        id: number;
        name: string;
        shortName: string;
        tla: string;
        crest: string;
      };
      playedGames: number;
      won: number;
      draw: number;
      lost: number;
      points: number;
      goalsFor: number;
      goalsAgainst: number;
      goalDifference: number;
      form?: string;
    }>;
  }>;
}



