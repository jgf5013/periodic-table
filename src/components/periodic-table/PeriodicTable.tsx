import { FC } from 'react';
import TableElement, { AtomicElement, AtomicElementProps } from '../table-element/TableElement';
import { elementListToElementMatrix } from './periodic-table.service';
import './PeriodicTable.scss'


export interface PeriodicTableProps {
    atomicElements: AtomicElement[];
}
export interface PeriodicTableRowProps {
    atomicElements: AtomicElement[];
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