import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { userLogin, userLogOut } from './actions/user';
import { Button, TextInput } from './components';
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends Component {
	state = {
		username: '',
		password: ''
	};

	simpleAction = (event) => {
		const { username, password } = this.state;
		if (username === '' || password === '') {
			alert('username and password need to be entered');
			return;
		}
		this.props.userLogin(this.state.username, this.state.password);
	};

	logOut = (event) => {
		this.setState({ username: '', password: '' });
		this.props.userLogOut();
	};

	renderLoginForm() {
		return (
			<div>
				<h4 style={{ textAlign: 'center' }}>Welcome to Login Screen</h4>
				<TextInput
					value={this.state.username}
					placeholder="username"
					onChange={(username) => this.setState({ username })}
				/>
				<TextInput
					value={this.state.password}
					placeholder="password"
					type="password"
					onChange={(password) => this.setState({ password })}
				/>

				<Button full="true" onClick={this.simpleAction}>
					Login
				</Button>
			</div>
		);
	}

	renderLogOut() {
		return (
			<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
				<h4 style={{ marginBottom: '20px' }}>Press Logout to Login Again</h4>

				<Button onClick={this.logOut}>Log Out</Button>
			</div>
		);
	}

	render() {
		return (
			<Grid fluid>
				<Row>
					<Col
						xs={12}
						sm={8}
						md={6}
						lg={4}
						smOffset={2}
						lgOffset={4}
						mdOffset={3}
						style={{ padding: '5px', backgroundColor: 'transparent', borderRadius: 5, marginTop: '50px' }}
					>
						{this.props.user.username ? this.renderLogOut() : this.renderLoginForm()}
					</Col>
				</Row>
			</Grid>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.user
});

const mapDispatchToProps = (dispatch) => ({
	userLogin: (username, password) => dispatch(userLogin(username, password)),
	userLogOut: () => dispatch(userLogOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
