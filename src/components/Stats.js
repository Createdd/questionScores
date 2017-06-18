import React, { PropTypes } from 'react';

const Stats = (props) => {
  const questionCount = props.questions.length;
  const totalPoints = props.questions.reduce((total, question) => total + question.score, 0);

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Questions:</td>
          <td>{questionCount}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
};

Stats.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default Stats;
