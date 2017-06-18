import React, { PropTypes } from 'react';

export default class AddQuestionForm extends React.Component {
	state = {
		name: '',
	};

	onNameChange = e => {
		const name = e.target.value;
		this.setState({ name });
	};

	onSubmit = e => {
		if (e) e.preventDefault();
		this.props.onAdd(this.state.name);
		this.setState({ name: '' });
	};

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
	onAdd: PropTypes.func.isRequired,
};
