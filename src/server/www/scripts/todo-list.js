import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Input } from 'react-materialize';
import { ADD_TODO, REMOVE_TODO } from './actionTypes';

export default class TodoList extends React.Component {

	addTodo(text) {
		return { type: ADD_TODO, text }
	}

	boundAction(actionName, ...args) {
		dispatch(this[actionName](...args));
	}

	render() {
		return(
			<div className="todo-list">
				<Row>
					<Input type="text" placeholder="Add some task" onClick={() => {this.addTodo('testando')}} s={12} />
					<Row className="todo-list-items">
						<Input type="checkbox" label="{text}" s={12} />
					</Row>	
				</Row>
			</div>
		);
	}
};