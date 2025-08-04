export interface Area {
    readonly id: number;
    readonly name: string;
    readonly code: string;
    readonly flag: string | null;
    readonly parentAreaId?: number;
    readonly parentArea?: string;
    readonly childAreas: ReadonlyArray<ChildArea>;
}

export interface ChildArea {
    readonly id: number;
    readonly name: string;
    readonly countryCode: string;
    readonly flag: string | null;
    readonly parentAreaId: number;
    readonly parentArea: string;
}
