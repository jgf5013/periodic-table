
export interface IAtomicElement {

    name: string;
    appearance: string | null;
    atomicMass: number;
    boil: number | null;
    category: string;
    color: string | null;
    density: number | null;
    discoveredBy: string | null;
    melt: number | null;
    molarHeat: number | null;
    namedBy: string | null;
    number: number;
    period: number;
    phase: string;
    source: string;
    spectralImg: string | null;
    summary: string;
    symbol: string;
    xpos: number;
    ypos: number;
    shells: number [];
    electronConfiguration: string;
    electronConfigurationSemantic: string;
    electronAffinity: number | null;
    electroNegativityPauling: number | null;
    ionizationEnergies: number[];
    cpkHex: string | null;
}
