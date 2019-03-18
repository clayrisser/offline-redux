import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { userLogin } from './actions/user';

class App extends Component {
	state = {
		username: '',
		password: ''
	};

	simpleAction = (event) => {
		//	console.log('thist', this.state);
		this.props.userLogin(this.state.username, this.state.password);
	};

	render() {
		return (
			<div className="App">
				<input placeholder="username" onChange={(event) => this.setState({ username: event.target.value })} />
				<input placeholder="password" onChange={(event) => this.setState({ password: event.target.value })} />

				<button onClick={this.simpleAction}>Click Me</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	...state
});

const mapDispatchToProps = (dispatch) => ({
	userLogin: (username, password) => dispatch(userLogin(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
