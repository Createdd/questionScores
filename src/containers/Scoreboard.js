import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddQuestionForm from '../components/AddQuestionForm';
import Header from '../components/Header';
import Question from '../components/Question';
import QuestionDetail from '../components/QuestionDetail';
import * as QuestionActionCreators from '../ducks/question';

class Scoreboard extends React.Component {
	static PropTypes = {
		questions: PropTypes.array.isRequired,
	};

	render() {
		const { dispatch, questions, selectedQuestionIndex } = this.props;
		const addQuestion = bindActionCreators(QuestionActionCreators.addQuestion, dispatch);
		const removeQuestion = bindActionCreators(QuestionActionCreators.removeQuestion, dispatch);
		const updateQuestionScore = bindActionCreators(
			QuestionActionCreators.updateQuestionScore,
			dispatch,
		);
		const selectQuestion = bindActionCreators(QuestionActionCreators.selectQuestion, dispatch);

		let selectedQuestion;
		if (selectedQuestionIndex !== -1) {
			selectedQuestion = questions[selectedQuestionIndex];
		}

		const questionComponents = questions.map((question, index) =>
			<Question
				index={index}
				name={question.name}
				score={question.score}
				key={question.name}
				updateQuestionScore={updateQuestionScore}
				removeQuestion={removeQuestion}
				selectQuestion={selectQuestion}
			/>,
		);

		return (
			<div className="scoreboard">
				<Header questions={questions} />
				<div className="questions">
					{questionComponents}
				</div>
				<AddQuestionForm addQuestion={addQuestion} />
				<div className="question-detail">
					<QuestionDetail selectedQuestion={selectedQuestion} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	questions: state.questions,
	selectedQuestionIndex: state.selectedQuestionIndex,
});

export default connect(mapStateToProps)(Scoreboard);
