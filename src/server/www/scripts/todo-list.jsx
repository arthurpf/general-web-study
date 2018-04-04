import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Input } from 'react-materialize';
import { ADD_TODO, REMOVE_TODO } from './actionTypes';
import { boundAction } from './redux-utils'

export default class TodoList extends React.Component {

	addTodo(text) {
		return { type: ADD_TODO, text }
	}

	render() {
		return(
			<div className="todo-list">
				<Row>
					<Input type="text" placeholder="Add some task" onClick={() => {boundAction('addTodo', 'testando')}} s={12} />
					<Row className="todo-list-items">
						<Input type="checkbox" label="{text}" s={12} />
					</Row>	
				</Row>
			</div>
		);
	}
};