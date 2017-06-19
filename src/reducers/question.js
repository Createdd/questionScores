import * as QuestionActionTypes from '../actiontypes/question';

const initialState = {
  questions: [
    {
      name: 'Do you like AI?',
      score: 31,
      created: '00:00',
      updated: '00:00',
    },
    {
      name: 'Do you like Engineering?',
      score: 20,
      created: '00:00',
      updated: '00:00',
    },
    {
      name: 'How many Redux Apps?',
      score: 50,
      created: '00:00',
      updated: '00:00',
    },
  ],
  selectedQuestionIndex: -1,
};

export default function Question(state = initialState, action) {
  const date = `${new Date().getHours()}:00`;
  switch (action.type) {
    case QuestionActionTypes.ADD_QUESTION:
      const addQuestionList = [
        ...state.questions,
        {
          name: action.name,
          score: 0,
          created: date,
        },
      ];
      return {
        ...state,
        questions: addQuestionList,
      };
    case QuestionActionTypes.REMOVE_QUESTION:
      const removeQuestionList = [
        ...state.questions.slice(0, action.index),
        ...state.questions.slice(action.index + 1),
      ];
      return {
        ...state,
        questions: removeQuestionList,
      };

    case QuestionActionTypes.UPDATE_QUESTION_SCORE:
      const updateQuestionList = state.questions.map((question, index) => {
        if (index === action.index) {
          return {
            ...question,
            score: question.score + action.score,
            updated: date,
          };
        }
        return question;
      });
      return {
        ...state,
        questions: updateQuestionList,
      };
    case QuestionActionTypes.SELECT_QUESTION:
      return {
        ...state,
        selectedQuestionIndex: action.index,
      };

    default:
      return state;
  }
}
