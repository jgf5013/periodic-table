import { FC, useContext } from 'react';
import AppContext, { AppActionType } from '../../app-context';
import { IAtomicElement } from './atomic-element';
import './AtomicElement.scss';


export interface AtomicElementProps {
    atomicElement?: IAtomicElement;
}

const TableElement: FC<AtomicElementProps> = ({atomicElement}) => {
    const { state, dispatch } = useContext(AppContext);
    const { quiz } = state;
    console.log('quiz=', quiz);
    
    return (
            <div>
                {atomicElement
                    ? <div className={`grid-item ${quiz.currentIncorrectPile.includes(atomicElement.number) ? 'incorrect' : ''}`} onClick={(e) => {
                        dispatch({type: AppActionType.AnswerQuestion, payload: atomicElement.number});
                      }}>
                        <div className="table-element">
                            <span>{atomicElement.number}</span>
                            <br/>
                            <span className="symbol">{atomicElement.symbol}</span>
                        </div>
                      </div>
                    : <div className="table-filler">{/* intentionally empty to introduce gap */}</div>
                }
            </div>
    );
}

export default TableElement;