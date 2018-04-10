import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Input } from 'react-materialize';
import { addTodo } from './actions';

class AddTodo extends React.Component {

	constructor() {
		super();
		this.taskInputValue;
	}

	render() {
		return (
			<form onSubmit={e => {
				e.preventDefault()
				if (!this.taskInputValue.value.trim()) {
					return
				}
				dispatch(addTodo(this.taskInputValue.value))
				this.taskInputValue.value = ''
			}}>
				<Input type="text" ref={(node) => { this.taskInputValue = node.input }} placeholder="Add some task" s={12} />
				<Input type="submit" />
			</form>
		)
	}
}

export default connect()(AddTodo);