import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Icon } from 'react-materialize';
import { createStore } from 'redux';
import { hot } from 'react-hot-loader';

class MyComponent extends React.Component {
	render() {
		return (
			<div>
				<div className="teste">
				</div>
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