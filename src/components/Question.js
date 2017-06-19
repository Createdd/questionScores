import React, { PropTypes } from 'react';

import Counter from './Counter';

const Question = props =>
  (<div className="question">
    <div className="question-name" onClick={() => props.selectQuestion(props.index)}>
      <a className="remove-question" onClick={() => props.removeQuestion(props.index)}>✖</a>
      {props.name}
    </div>
    <div className="question-score">
      <Counter
        index={props.index}
        updateQuestionScore={props.updateQuestionScore}
        score={props.score}
      />
    </div>
  </div>);

Question.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  removeQuestion: PropTypes.func.isRequired,
  selectQuestion: PropTypes.func.isRequired,
  updateQuestionScore: PropTypes.func.isRequired,
};

export default Question;
