import { FC } from 'react';

import './table-element.scss'

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
    atomicElement?: AtomicElement;
}

const TableElement: FC<AtomicElementProps> = ({atomicElement}) => {

    console.log('atomicElement=', atomicElement);
    
    return (
            <div className="grid-item">
                {atomicElement
                    ? <div className="table-element">
                        <span>{atomicElement.symbol}</span>
                        <br/>
                        <span>{atomicElement.number}</span>
                      </div>
                    : <div className="table-filler">{/* intentionally empty to introduce gap */}</div>
                }

            </div>
    );
}

export default TableElement;