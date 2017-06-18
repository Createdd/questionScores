import * as QuestionActionTypes from '../actiontypes/question';

export const addQuestion = name => ({
  type: QuestionActionTypes.ADD_QUESTION,
  name,
});

export const removeQuestion = index => ({
  type: QuestionActionTypes.REMOVE_QUESTION,
  index,
});

export const updateQuestionScore = (index, score) => ({
  type: QuestionActionTypes.UPDATE_QUESTION_SCORE,
  index,
  score,
});
