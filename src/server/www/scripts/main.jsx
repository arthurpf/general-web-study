import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Icon, Navbar, NavItem } from 'react-materialize';
import { createStore } from 'redux';
import { hot } from 'react-hot-loader';
import TodoList from './todo-list';

class MyComponent extends React.Component {
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

ReactDOM.render(<MyComponent />, document.getElementById('react-app'));

export default hot(module)(MyComponent);