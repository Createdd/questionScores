import React, { PropTypes } from 'react';

export default class AddQuestionForm extends React.Component {
	state = {
		name: '',
	};

	onNameChange = e => {
		const name = e.target.value;
		this.setState({ name });
	};

	addQuestion = e => {
		if (e) e.preventDefault();
		this.props.addQuestion(this.state.name);
		this.setState({ name: '' });
	};

	render() {
		return (
			<div className="add-question-form">
				<form onSubmit={this.addQuestion}>
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
	addQuestion: PropTypes.func.isRequired,
};
