import React from 'react';
import ReactDOM from 'react-dom';
import { ADD_TODO, SHOW_ALL, SET_VISIBILITY_FILTER } from './actionTypes';
import { Button, Icon, Navbar, NavItem } from 'react-materialize';
import { createStore } from 'redux';
import { hot } from 'react-hot-loader';
import TodoList from './todo-list.jsx';

const initialState = {
	visibilityFilter: SHOW_ALL,
	todos: []
}

function todoApp(state = initialState, action) {
	switch(action.type) {
		case SET_VISIBILITY_FILTER:
			return Object.assign({}, state, {
				visibilityFilter: action.filter
			});
		case ADD_TODO:
			return Object.assign({}, state, {
				todo: [
					...state.todos,
					{
						text: action.text,
						completed: false
					}
				],
			});
		case TOGGLE_TODO:
			return Object.assign({}, state, {
				todos: state.todos.map((todo, index) => {
					if(index === action.index) {
						return Object.assign({}, todo, {
							completed: !todo.completed
						})
					}
				})
			});
		default:
			return state;
	}
}

class App extends React.Component {
	render() {
		return (
			<div>
				<header>
					<Navbar brand='Todo List' right>
					</Navbar>
				</header>
				<TodoList/>
				<Button waves='light'>
					Testando
				<Icon left>thumb_up</Icon>
				</Button>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('react-app'));

export default hot(module)(App);