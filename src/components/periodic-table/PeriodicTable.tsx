import { FC } from 'react';
import TableElement, { AtomicElementProps } from '../table-element/TableElement';


export interface PeriodicTableProps {
    atomicElements: AtomicElementProps[];
}

const PeriodicTable: FC<PeriodicTableProps> = ({atomicElements}) => {
    const listOfElements = atomicElements.map((atomicElementProps) => <TableElement atomicElement={atomicElementProps.atomicElement} />);

    const rows = Math.max(...atomicElements.map(ae => ae.atomicElement.xpos), 0);
    const columns = Math.max(...atomicElements.map(ae => ae.atomicElement.ypos), 0);
    return (
        <div className="table-element">
            <p>rows: {rows}</p>
            <p>columns: {columns}</p>
            {listOfElements}
        </div>
    );
}

export default PeriodicTable;