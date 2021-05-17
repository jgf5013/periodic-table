import { AppActionType, IAppAction, IAppState, IQuizState } from "./app-context";
import QuizItem from "./components/quiz-item/QuizItem";

export const appReducer: React.Reducer<IAppState, IAppAction> = (state, action) => {
    console.log('state=', state, ', action=', action);
    switch (action.type) {
      case AppActionType.AnswerQuestion:
          return isAnswerCorrect(state.quiz, action.payload) ? 
            {...state, quiz: getNextQuestion(state.quiz)} :
            {...state, quiz: markIncorrect(state.quiz, action.payload)};
      default:
          throw new Error();
    }
}

const isAnswerCorrect = (quizItem: IQuizState, atomicNumber: number) => {
    return quizItem.atomicElement?.number === atomicNumber;
};

const getNextQuestion = (quizItem: IQuizState): IQuizState => {
    console.log('Question answered correctly! Moving onto the next...')
    const initialQuestionIndex = Math.floor(Math.random() * quizItem.remainingQuestions.length);
    const nextQuestion = quizItem.remainingQuestions.splice(initialQuestionIndex, 1)[0];

    return {
        ...quizItem,
        atomicElement: nextQuestion,
        remainingQuestions: [...quizItem.remainingQuestions],
        currentIncorrectPile: [],
        aggregateIncorrectPile: [...quizItem.aggregateIncorrectPile, ...quizItem.currentIncorrectPile]
    };
};



const markIncorrect = (quizItem: IQuizState, atomicNumber: number): IQuizState => {
    console.log('Question answered incorrectly... whomp whooomp!!')

    return {
        ...quizItem,
        currentIncorrectPile: [...quizItem.currentIncorrectPile, atomicNumber]
    };
}