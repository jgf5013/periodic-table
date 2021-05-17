import { TABLE_COLUMNS, TABLE_ROWS } from '../../app.constants';
import { IAtomicElement } from '../atomic-element/atomic-element';
import { AtomicElementProps } from '../atomic-element/AtomicElement';

export const elementListToElementMatrix = (elements: IAtomicElement[]):(AtomicElementProps|undefined)[] => {
    const table: (AtomicElementProps|undefined)[] = new Array(TABLE_COLUMNS * TABLE_ROWS).fill(undefined);
    elements.forEach((atomicElement) => {
        table[(TABLE_COLUMNS * (atomicElement.ypos - 1)) + atomicElement.xpos - 1] = {
            atomicElement
        };
    });
    return table;
}