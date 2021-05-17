import React, { FC, useReducer } from "react";
import AppContext, { IAppAction, IAppState, initialStateApp } from "../../app-context";
import { appReducer } from "../../app-reducer";
import { IAtomicElement } from '../atomic-element/atomic-element';


const QuizItem: FC = () => {
    const { state } = React.useContext(AppContext);
    const { quiz } = state;
    const prompt = quiz.atomicElement ? quiz.atomicElement[quiz.promptCategory as keyof IAtomicElement] : null;
    return (
        <div>
            <p>{prompt}</p>
        </div>
    );
};

export default QuizItem;