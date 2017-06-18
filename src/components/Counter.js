import React, { PropTypes } from 'react';

const Counter = props =>
  (<div className="counter">
    <button
      className="counter-action decrement"
      onClick={() => props.updateQuestionScore(props.index, -1)}
    >
			-
		</button>
    <div className="counter-score"> {props.score} </div>
    <button
      className="counter-action increment"
      onClick={() => props.updateQuestionScore(props.index, 1)}
    >
			+
		</button>
  </div>);

Counter.propTypes = {
  updateQuestionScore: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default Counter;
