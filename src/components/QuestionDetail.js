import React, { PropTypes } from 'react';

const QuestionDetail = ({ selectedQuestion }) => {
  if (selectedQuestion) {
    return (
      <div>
        <h3>{selectedQuestion.name}</h3>
        <ul>
          <li>
            <span>Score: </span>
            {selectedQuestion.score}
          </li>
          <li>
            <span>Created: </span>
            {selectedQuestion.created}
          </li>
          <li>
            <span>Updated: </span>
            {selectedQuestion.updated}
          </li>
        </ul>
      </div>
    );
  }
  return <p>Click on a Question to see more details</p>;
};

QuestionDetail.propTypes = {
  selectedQuestion: PropTypes.object,
};

export default QuestionDetail;
