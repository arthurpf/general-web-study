import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Input } from 'react-materialize';
import { connect } from 'react-redux';
import { ADD_TODO, REMOVE_TODO } from './actionTypes';

class TodoList extends React.Component {

	addTodo(text) {
		return { type: ADD_TODO, text }
	}

	render(props) {
		console.log(props);
		return(
			<div className="todo-list">
				<Row>
				</Row>
			</div>
		);
	}
};

export default connect()(TodoList);