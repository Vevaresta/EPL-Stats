import { Area } from "./area";
import { CompetitionType, TeamType } from "./competition";
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

    readonly runningCompetitions: ReadonlyArray<CompetitionType>;

    readonly coach?: Person;
    readonly squad: ReadonlyArray<Person>;
    readonly area: Area;
    readonly type: TeamType;
}

