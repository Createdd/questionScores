import React from 'react';

import Stopwatch from '../components/Stopwatch';


const INITIAL_STATE = {
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

class Scoreboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = INITIAL_STATE;
	}

	onScoreChange(index, delta) {
		this.state.questions[index].score += delta;
		this.setState(this.state);
	}

	onAddQuestion(name) {
		this.state.questions.push({ name, score: 0 });
		this.setState(this.state);
	}

	onRemoveQuestion(index) {
		this.state.questions.splice(index, 1);
		this.setState(this.state);
	}

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

// Move to components/Header.js
// ----------------------------------------------
function Header(props) {
	return (
		<div className="header">
			<Stats questions={props.questions} />
			<h1>Scoreboard</h1>
			<Stopwatch />
		</div>
	);
}

Header.propTypes = {
	questions: React.PropTypes.array.isRequired,
};

// Move to components/Stats.js
// -----------------------------------------------------------------------
function Stats(props) {
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
}

Stats.propTypes = {
	questions: React.PropTypes.array.isRequired,
};




// Move to components/Question.js
// ----------------------------------------------------------------------
function Question(props) {
	return (
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
}

Question.propTypes = {
	name: React.PropTypes.string.isRequired,
	score: React.PropTypes.number.isRequired,
	onRemove: React.PropTypes.func.isRequired,
	onScoreChange: React.PropTypes.func.isRequired,
};

// Move to components/Counter.js
// ----------------------------------------------------------
function Counter(props) {
	return (
		<div className="counter">
			<button className="counter-action decrement" onClick={() => props.onChange(-1)}>
				-
			</button>
			<div className="counter-score"> {props.score} </div>
			<button className="counter-action increment" onClick={() => props.onChange(1)}>
				+
			</button>
		</div>
	);
}

Counter.propTypes = {
	onChange: React.PropTypes.func.isRequired,
	score: React.PropTypes.number.isRequired,
};

class AddQuestionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
		};
	}

	onNameChange(e) {
		const name = e.target.value;
		this.setState({ name });
	}

	onSubmit(e) {
		if (e) e.preventDefault();
		this.props.onAdd(this.state.name);
		this.setState({ name: '' });
	}

	render() {
		return (
			<div className="add-question-form">
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						value={this.state.name}
						onChange={this.onNameChange}
						placeholder="Question Name"
					/>
					<input type="submit" value="Add Question" />
				</form>
			</div>
		);
	}
}

AddQuestionForm.propTypes = {
	onAdd: React.PropTypes.func.isRequired,
};

export default Scoreboard;
