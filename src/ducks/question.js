// Actions
const ADD_QUESTION = 'question/ADD_QUESTION';
const REMOVE_QUESTION = 'question/REMOVE_QUESTION';
const UPDATE_QUESTION_SCORE = 'question/UPDATE_QUESTION_SCORE';
const SELECT_QUESTION = 'question/SELECT_QUESTION';

// Reducers
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
    case ADD_QUESTION:
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
    case REMOVE_QUESTION:
      const removeQuestionList = [
        ...state.questions.slice(0, action.index),
        ...state.questions.slice(action.index + 1),
      ];
      return {
        ...state,
        questions: removeQuestionList,
      };
    case UPDATE_QUESTION_SCORE:
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
    case SELECT_QUESTION:
      return {
        ...state,
        selectedQuestionIndex: action.index,
      };
    default:
      return state;
  }
}

// ActionCreators
export const addQuestion = name => ({
  type: ADD_QUESTION,
  name,
});
export const removeQuestion = index => ({
  type: REMOVE_QUESTION,
  index,
});
export const updateQuestionScore = (index, score) => ({
  type: UPDATE_QUESTION_SCORE,
  index,
  score,
});
export const selectQuestion = index => ({
  type: SELECT_QUESTION,
  index,
});
