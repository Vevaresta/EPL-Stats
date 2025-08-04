import { Team } from "./team";

export interface Person {
    readonly id: number;
    readonly name: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly dateOfBirth: string;
    readonly nationality: string | null;
    readonly position?: string;
    readonly shirtNumber?: number;
    readonly lastUpdated: string;
    readonly currentTeam: Team;
    readonly role?: PersonRole;
    readonly contract?: Contract;  
    readonly marketValue?: number | null;
}

export interface Contract {
    readonly start: string;
    readonly until: string;
}

export type PersonRole = "PLAYER" | "COACH" | "REFEREEE" | "ASSISTANT_REFEREE_N1" | "ASSISTANT_REFEREE_N2" | "FOURTH_OFFICIAL" | "VIDEO_ASSISTANT_REFEREE_N1" | "VIDEO_ASSISTANT_REFEREE_N2";
