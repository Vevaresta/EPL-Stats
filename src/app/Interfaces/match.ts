import { Area } from "./area";
import { Competition } from "./competition";
import { Person, PersonRole } from "./person";
import { Team } from "./team";

export interface Match {
  
    readonly area: Area;
    readonly competition: Competition;
    readonly season: Season;

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
    readonly goals: ReadonlyArray<Goal>;
    readonly penalties: ReadonlyArray<Penalty>;
    readonly bookings: ReadonlyArray<Booking>;
    readonly substitutions: ReadonlyArray<Substitution>;
    readonly referees: ReadonlyArray<Referee>;


}

export interface Season {
    readonly id: number;
    readonly startDate: string;
    readonly endDate: string;
    readonly currentMatchday: number;
    // winner maybe not null
    readonly winner?: null;
    readonly stages: ReadonlyArray<Stage>;
}

export interface MatchTeam {
    readonly id: number;
    readonly name: string;
    readonly shortName: string;
    readonly tla: string;
    readonly crest: string;
    readonly coach: Coach | null;
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
    readonly fullTime: Result;
    readonly halfTime: Result;
    readonly extraTime?: Result;
    readonly penalties?: Result;
}

export interface Result {
    readonly home: number | null;
    readonly away: number | null;
}

export interface Goal {
  readonly minute: number;
  readonly injuryTime: number | null;
  readonly type: string;
  readonly team: Team;
  readonly scorer: Person;
  readonly assist: Person | null;
  readonly score: {
    readonly home: number;
    readonly away: number;
  };
}

export interface Penalty {
  readonly player: Person;
  readonly team: Team;
  readonly scored: boolean;
}

export interface Booking {
  readonly minute: number;
  readonly team: Team;
  readonly player: Person;
  readonly card: "YELLOW" | "RED" | "YELLOW_RED";
}

export interface Substitution {
  readonly minute: number;
  readonly team: Team;
  readonly playerOut: Person;
  readonly playerIn: Person;
}

export interface Referee {
  readonly id: number;
  readonly name: string;
  readonly type: PersonRole;
  readonly nationality: string | null;
}

export enum Status {
    SCHEDULED = "SCHEDULED",
    TIMED = "TIMED",
    IN_PLAY = "IN_PLAY",
    PAUSED = "PAUSED",
    FINISHED = "FINISHED",
    SUSPENDED = "SUSPENDED",
    POSTPONED = "POSTPONED",
    CANCELLED = "CANCELLED",
    AWARDED = "AWARDED"
}

export enum Stage {
    FINAL = "FINAL",
    THIRD_PLACE = "THIRD_PLACE",
    SEMI_FINALS = "SEMI_FINALS",
    QUARTER_FINALS = "QUARTER_FINALS",
    LAST_16 = "LAST_16",
    LAST_32 = "LAST_32",
    LAST_64 = "LAST_64",
    ROUND_4 = "ROUND_4",
    ROUND_3 = "ROUND_3",
    ROUND_2 = "ROUND_2",
    ROUND_1 = "ROUND_1",
    GROUP_STAGE = "GROUP_STAGE",
    PRELIMINARY_ROUND = "PRELIMINARY_ROUND",
    QUALIFICATION = "QUALIFICATION",
    QUALIFICATION_ROUND_1 = "QUALIFICATION_ROUND_1",
    QUALIFICATION_ROUND_2 = "QUALIFICATION_ROUND_2",
    QUALIFICATION_ROUND_3 = "QUALIFICATION_ROUND_3",
    PLAYOFF_ROUND_1 = "PLAYOFF_ROUND_1",
    PLAYOFF_ROUND_2 = "PLAYOFF_ROUND_2",
    PLAYOFFS = "PLAYOFFS",
    REGULAR_SEASON = "REGULAR_SEASON",
    CLAUSURA = "CLAUSURA",
    APERTURA = "APERTURA",
    CHAMPIONSHIP_ROUND = "CHAMPIONSHIP_ROUND",
    RELEGATION_ROUND = "RELEGATION_ROUND"
}


export enum Group {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
    E = 'E',
    F = 'F',
    G = 'G',
    H = 'H',
    I = 'I',
    J = 'J',
    K = 'K',
    L = 'L',
}