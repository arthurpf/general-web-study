import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Input } from 'react-materialize';
import { ADD_TODO, REMOVE_TODO } from './actionTypes';

export default class TodoItem extends React.Component {

	render({onClick, completed, text}) {
		return (
			<Input type="checkbox" checked={completed} onClick={onClick} label="{text}" s={12} />
		);
	}
};