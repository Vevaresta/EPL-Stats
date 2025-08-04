import { Area } from "./area";
import { Person } from "./person";

export interface Team {
    readonly id: number;
    readonly name: string;
    readonly shortName: string;
    readonly tla: string;
    readonly crest: string | null;
    readonly address: string;
    readonly website: string;
    readonly founded: number | null;
    readonly clubColors: string;
    readonly venue: string;
    readonly lastUpdated: string;

    readonly runningCompetitions: ReadonlyArray<CompetitionSummary>;

    readonly coach?: Person;
    readonly squad: readonly Person[];
    readonly area: Area;


}

export interface CompetitionSummary {
    readonly id: number;
    readonly name: string;
    readonly code: string;
    readonly type: CompetitionType;
    readonly emblem: string | null;
}

export type CompetitionType = 
    "LEAGUE" | "LEAGUE CUP" | "NATIONAL CUP" | "CHAMPIONS LEAGUE" | "EUROPA LEAGUE" | "CONFERENCE LEAGUE" | "DOMESTIC SUPERCUP" | "EUROPEAN SUPERCUP" | "CONFEDERATION CUP" | "FRIENDLY";
