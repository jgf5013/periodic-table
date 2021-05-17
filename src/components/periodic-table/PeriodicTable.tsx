import { FC } from 'react';
import { IAtomicElement } from '../atomic-element/atomic-element';
import TableElement, { AtomicElementProps } from '../atomic-element/AtomicElement';
import { elementListToElementMatrix } from './periodic-table.service';
import './PeriodicTable.scss';


export interface PeriodicTableProps {
    atomicElements: IAtomicElement[];
}
export interface PeriodicTableRowProps {
    atomicElements: IAtomicElement[];
}

const PeriodicTable: FC<PeriodicTableProps> = ({atomicElements}) => {
    const elementsMatrix = elementListToElementMatrix(atomicElements);
    const tableOfElements = elementsMatrix.map((atomicElementProps: (AtomicElementProps|undefined), index: number) => {
        return (<TableElement key={"table-element-" + index} atomicElement={atomicElementProps?.atomicElement} />);
    });
    return (
        <div className="periodic-table">
            {tableOfElements}
        </div>
    );
}



export default PeriodicTable;