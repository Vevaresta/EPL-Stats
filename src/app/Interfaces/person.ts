import { Team } from "./team";

export interface Person {
    readonly id: number;
    readonly name: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly dateOfBirth: string;
    readonly nationality: string | null;
    readonly position?: Position;
    readonly shirtNumber?: number;
    readonly lastUpdated: string;
    readonly currentTeam: Team | null;
    readonly role?: PersonRole;
    readonly contract?: Contract;  
    readonly marketValue?: number | null;
}

export interface Contract {
    readonly start: string;
    readonly until: string;
}

export type PersonRole = 
    "PLAYER" | "COACH" | "REFEREE";

export type Position = 
    "GK" | "DF" | "MF" | "FW";
