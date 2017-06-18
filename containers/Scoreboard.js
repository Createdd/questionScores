import React from 'react';

import AddQuestionForm from '../components/AddQuestionForm';
import Header from '../components/Header';
import Question from '../components/Question';

export default class Scoreboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: [
				{
					name: 'Do you like AI?',
					score: 31,
				},
				{
					name: 'Do you like Engineering?',
					score: 20,
				},
				{
					name: 'How many Redux Apps?',
					score: 50,
				},
			],
		};
	}

	onScoreChange = (index, delta) => {
		this.state.questions[index].score += delta;
		this.setState(this.state);
	};

	onAddQuestion = name => {
		this.state.questions.push({ name, score: 0 });
		this.setState(this.state);
	};

	onRemoveQuestion = index => {
		this.state.questions.splice(index, 1);
		this.setState(this.state);
	};

	render() {
		return (
			<div className="scoreboard">
				<Header questions={this.state.questions} />
				<div className="questions">
					{this.state.questions.map((question, index) =>
						<Question
							name={question.name}
							score={question.score}
							key={question.name}
							onScoreChange={delta => this.onScoreChange(index, delta)}
							onRemove={() => this.onRemoveQuestion(index)}
						/>,
					)}
				</div>
				<AddQuestionForm onAdd={this.onAddQuestion} />
			</div>
		);
	}
}
