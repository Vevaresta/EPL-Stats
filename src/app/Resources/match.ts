import { Area } from "./area";
import { Competition } from "./competition";
import { Person } from "./person";
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
    readonly winner?: Team | null;
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
    readonly formation: string | null;
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
    readonly cornerKicks: number;
    readonly freeKicks: number;
    readonly goalKicks: number;
    readonly offsides: number;
    readonly fouls: number;
    readonly ballPossession: number;
    readonly saves: number;
    readonly throwIns: number;
    readonly shots: number;
    readonly shotsOnGoal: number;
    readonly shotsOffGoal: number;
    readonly yellowCards: number;
    readonly yellowRedCards: number;
    readonly redCards: number;
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
  readonly type: GoalType;
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
  readonly type: PenaltyType;
}

export interface Booking {
  readonly minute: number;
  readonly team: Team;
  readonly player: Person;
  readonly card: CardType;
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
  readonly type: RefereeRole;
  readonly nationality: string | null;
}

export enum GoalType {
    REGULAR = "REGULAR",
    OWN = "OWN",
    PENALTY = "PENALTY"
}

export enum PenaltyType {
    REGULAR_MATCH = "REGULAR_MATCH",
    SHOOTOUT = "SHOOTOUT"
}

export enum CardType {
    YELLOW = "YELLOW",
    YELLOW_RED = "YELLOW_RED",
    RED = "RED"
}


export enum Status {
    SCHEDULED = "SCHEDULED",
    TIMED = "TIMED",
    IN_PLAY = "IN_PLAY",
    PAUSED = "PAUSED",
    EXTRA_TIME = "EXTRA_TIME",
    PENALTY_SHOOTOUT = "PENALTY_SHOOTOUT",
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
    GROUP_A = "GROUP_A",
    GROUP_B = "GROUP_B",
    GROUP_C = "GROUP_C",
    GROUP_D = "GROUP_D",
    GROUP_E = "GROUP_E",
    GROUP_F = "GROUP_F",
    GROUP_G = "GROUP_G",
    GROUP_H = "GROUP_H",
    GROUP_I = "GROUP_I",
    GROUP_J = "GROUP_J",
    GROUP_K = "GROUP_K",
    GROUP_L = "GROUP_L"
}

export enum RefereeRole {
    REFEREE = "REFEREE",
    ASSISTANT_REFEREE_N1 = "ASSISTANT_REFEREE_N1",
    ASSISTANT_REFEREE_N2 = "ASSISTANT_REFEREE_N2",
    ASSISTANT_REFEREE_N3 = "ASSISTANT_REFEREE_N3",
    FOURTH_OFFICIAL = "FOURTH_OFFICIAL",
    VIDEO_ASSISTANT_REFEREE_N1 = "VIDEO_ASSISTANT_REFEREE_N1",
    VIDEO_ASSISTANT_REFEREE_N2 = "VIDEO_ASSISTANT_REFEREE_N2",
    VIDEO_ASSISTANT_REFEREE_N3 = "VIDEO_ASSISTANT_REFEREE_N3"
}