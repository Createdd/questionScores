import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddQuestionForm from '../components/AddQuestionForm';
import Header from '../components/Header';
import Question from '../components/Question';
import * as QuestionActionCreators from '../actions/question';

class Scoreboard extends React.Component {
	static PropTypes = {
		questions: PropTypes.array.isRequired,
	};

	render() {
		const { dispatch, questions } = this.props;
		const addQuestion = bindActionCreators(QuestionActionCreators.addQuestion, dispatch);
		const removeQuestion = bindActionCreators(QuestionActionCreators.removeQuestion, dispatch);
		const updateQuestionScore = bindActionCreators(
			QuestionActionCreators.updateQuestionScore,
			dispatch,
		);

		const questionComponents = questions.map((question, index) =>
			<Question
				index={index}
				name={question.name}
				score={question.score}
				key={question.name}
				updateQuestionScore={updateQuestionScore}
				removeQuestion={removeQuestion}
			/>,
		);

		return (
			<div className="scoreboard">
				<Header questions={questions} />
				<div className="questions">
					{questionComponents}
				</div>
				<AddQuestionForm addQuestion={addQuestion} />
			</div>
		);
	}
}

const mapStateToProps = state => ({ questions: state });

export default connect(mapStateToProps)(Scoreboard);
