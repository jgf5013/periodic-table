import { FC } from 'react';


export interface AtomicElement {

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

export interface AtomicElementProps {
    atomicElement: AtomicElement
}

const TableElement: FC<AtomicElementProps> = ({atomicElement}) => {
    
    return (
        <div className="table-element">
            <h1>{atomicElement.name}</h1>
            <p>{atomicElement.atomicMass}</p>
        </div>
    );
}

export default TableElement;