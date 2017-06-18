import React, { PropTypes } from 'react';

import Counter from './Counter';

const Question = props => (
  <div className="question">
    <div className="question-name">
      <a className="remove-question" onClick={props.onRemove}>✖</a>
      {props.name}
    </div>
    <div className="question-score">
      <Counter onChange={props.onScoreChange} score={props.score} />
    </div>
  </div>
	);

Question.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  onScoreChange: PropTypes.func.isRequired,
};

export default Question;
