import React, { useReducer } from 'react';
import { appReducer } from './app-reducer';

import { IAtomicElement } from './components/atomic-element/atomic-element';
import elementJson from './elements.json';

export interface IQuizState {
    remainingQuestions: IAtomicElement[];
    atomicElement?: IAtomicElement;
    promptCategory: string;
    currentIncorrectPile: number[],
    aggregateIncorrectPile: number[]
}

export interface IAppState {
    quiz: IQuizState,
    atomicElements: IAtomicElement[]
}

export enum AppActionType {
    AnswerQuestion = 'answer question'
}

export interface IAppAction {
    type: AppActionType,
    payload?: any
}

const remainingQuestions = [...elementJson.elements];
const initialQuestionIndex = Math.floor(Math.random() * remainingQuestions.length);
const initialQuizQuestion = remainingQuestions.splice(initialQuestionIndex, 1)[0];

const initialStateQuizItem: IQuizState = {
    remainingQuestions: remainingQuestions,
    atomicElement: initialQuizQuestion,
    promptCategory: 'name',
    currentIncorrectPile: [],
    aggregateIncorrectPile: []
};

export const initialStateApp: IAppState = {
    atomicElements: elementJson.elements,
    quiz: initialStateQuizItem
};

/* Note: The defaultValue argument is only used when a component does not have a matching Provider above it in the
 * tree. This can be helpful for testing components in isolation without wrapping them. Note: passing undefined as a
 * Provider value does not cause consuming components to use defaultValue. */
export const AppContext = React.createContext<{state: IAppState, dispatch: any}>({
    state: initialStateApp,
    dispatch: () => null
});


export const AppContextProvider = ({children}: any) => {
    const [state, dispatch] = useReducer<React.Reducer<IAppState, IAppAction>>(appReducer, initialStateApp);

    return (
        <AppContext.Provider
            value={{state, dispatch}}>
            {children}
        </AppContext.Provider>);
};



export function useCustomContext() {
  return React.useContext(AppContext);
}

export default AppContext;