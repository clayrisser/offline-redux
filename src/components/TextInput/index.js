import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';

class StyledTextInput extends Component {
	static propTypes = {
		style: PropTypes.object
	};

	static defaultProps = {
		style: {}
	};

	get style() {
		return {
			...this.props.style,
			marginBottom: '20px'
		};
	}

	render() {
		const props = { ...this.props };
		return <TextInput {...props} style={this.style} />;
	}
}

export default StyledTextInput;
