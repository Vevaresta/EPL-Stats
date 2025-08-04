import { Area } from "./area";
import { Competition } from "./competition";

export interface Match {
  
    readonly id: number;
    readonly utcDate: string;
    readonly status: Status;
    readonly minute: number;
    readonly injuryTime: number;
    readonly attendance: number;
    readonly venue: string;
    readonly matchday: number;
    readonly stage: Stage;
    readonly group?: Group | null;
    readonly lastUpdated: string;
    readonly homeTeam: MatchTeam;
    readonly awayTeam: MatchTeam;
    readonly score: Score;
    readonly area: Area;
    readonly competition: Competition;
    readonly season: Season;

}

export interface Season {
    readonly id: number;
    readonly startDate: string;
    readonly endDate: string;
    readonly currentMatchday: number;
    // winner maybe not null
    readonly winner?: null;
    readonly stages: [Stage];
}

export interface MatchTeam {
    readonly id: number;
    readonly name: string;
    readonly shortName: string;
    readonly tla: string;
    readonly crest: string;
    readonly coach: Coach;
    readonly leagueRank: number | null;
    readonly formation: string;
    readonly lineup: Player[];
    readonly bench: Player[];
    readonly statistics: TeamStatistics;
}

export interface Coach {
    readonly id: number;
    readonly name: string;
    readonly nationality: string;
}

export interface Player {
    readonly id: number;
    readonly name: string;
    readonly position: string | null;
    readonly shirtNumber: number;
}

export interface TeamStatistics {
    readonly corner_kicks: number;
    readonly free_kicks: number;
    readonly goal_kicks: number;
    readonly offsides: number;
    readonly fouls: number;
    readonly ball_possession: number;
    readonly saves: number;
    readonly throw_ins: number;
    readonly shots: number;
    readonly shots_on_goal: number;
    readonly shots_off_goal: number;
    readonly yellow_cards: number;
    readonly yellow_red_cards: number;
    readonly red_cards: number;
}

export interface Score {
    readonly winner: 'HOME_TEAM' | 'AWAY_TEAM' | 'DRAW' | null;
    readonly duration: 'REGULAR' | 'EXTRA_TIME' | 'PENALTY_SHOOTOUT';
    readonly fullTime: {
        home: number;
        away: number;
  };
    readonly halfTime?: {
        home: number;
        away: number;
  };
    readonly extraTime?: {
        home: number;
        away: number;
  };
    readonly penalties?: {
        home: number;
        away: number;
  };
}


export enum Status {
    SCHEDULED, TIMED, IN_PLAY, PAUSED, FINISHED, SUSPENDED, POSTPONED, CANCELLED, AWARDED
}

export enum Stage {
    FINAL, THIRD_PLACE,  SEMI_FINALS,  QUARTER_FINALS, LAST_16, LAST_32, LAST_64,  ROUND_4, ROUND_3,
    ROUND_2, ROUND_1, GROUP_STAGE, PRELIMINARY_ROUND, QUALIFICATION, QUALIFICATION_ROUND_1, QUALIFICATION_ROUND_2, QUALIFICATION_ROUND_3, PLAYOFF_ROUND_1, 
    PLAYOFF_ROUND_2, PLAYOFFS, REGULAR_SEASON, CLAUSURA, APERTURA, CHAMPIONSHIP_ROUND, RELEGATION_ROUND
}

export enum Group {
    GROUP_A, GROUP_B, GROUP_C, GROUP_D, GROUP_E, GROUP_F, GROUP_G, GROUP_H, GROUP_I, GROUP_J, GROUP_K, GROUP_L
}