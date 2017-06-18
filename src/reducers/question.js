import * as QuestionActionTypes from '../actiontypes/question';

const initialState = [
  {
    name: 'Do you like AI?',
    score: 31,
  },
  {
    name: 'Do you like Engineering?',
    score: 20,
  },
  {
    name: 'How many Redux Apps?',
    score: 50,
  },
];

export default function Question(state = initialState, action) {
  switch (action.type) {
    case QuestionActionTypes.ADD_QUESTION:
      return [
        ...state,
        {
          name: action.name,
          score: 0,
        },
      ];
    case QuestionActionTypes.REMOVE_QUESTION:
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
    case QuestionActionTypes.UPDATE_QUESTION_SCORE:
      return state.map((question, index) => {
        if (index === action.index) {
          return {
            ...question,
            score: question.score + question.score,
          };
        }
        return question;
      });
    default:
      return state;
  }
}
