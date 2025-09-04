import { Area } from "./area";
import { Competition } from "./competition";
import { Person } from "./person";

export interface Team {
    readonly id: number;
    readonly name: string;
    readonly shortName: string;
    readonly tla: string | null;
    readonly crest: string | null;
    readonly address: string;
    readonly website: string;
    readonly founded: number | string | null;
    readonly clubColors: string;
    readonly venue: string;
    readonly lastUpdated: string;

    readonly runningCompetitions: ReadonlyArray<Competition>;

    readonly coach?: Person;
    readonly squad: ReadonlyArray<Person>;
    readonly area: Area;
    readonly type: TeamType;
}


export enum TeamType {
    CLUB = "CLUB",
    NATIONAL = "NATIONAL"
}

