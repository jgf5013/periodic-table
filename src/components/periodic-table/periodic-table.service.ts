import { TABLE_COLUMNS, TABLE_ROWS } from "../../app.constants";
import { AtomicElement, AtomicElementProps } from "../table-element/TableElement";

export const elementListToElementMatrix = (elements: AtomicElement[]):(AtomicElementProps|undefined)[] => {
    const table: (AtomicElementProps|undefined)[] = new Array(TABLE_COLUMNS * TABLE_ROWS).fill(undefined);
    elements.forEach((atomicElement) => {
        table[(TABLE_COLUMNS * (atomicElement.ypos - 1)) + atomicElement.xpos - 1] = {
            atomicElement
        };
    });
    return table;
}