export interface Competition {
    readonly id: number;
    readonly name: string;
    readonly code: string;
    readonly type: CompetitionType;
    readonly emblem: string | null;
}


export enum CompetitionType {
    LEAGUE = "LEAGUE",
    LEAGUE_CUP = "LEAGUE_CUP",
    CUP = "CUP",
    PLAYOFFS = "PLAYOFFS"
}

export enum TeamType {
    CLUB = "CLUB",
    NATIONAL = "NATIONAL"
}

