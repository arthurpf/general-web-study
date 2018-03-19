import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Icon } from 'react-materialize';
import { createStore } from 'redux';

class MyComponent extends React.Component {
	render() {
		return (
			<Button waves='light'>
				<Icon>thumb_up</Icon>
				Testando
			</Button>
		);
	}
}

ReactDOM.render(<MyComponent />, document.getElementById('react-app'));