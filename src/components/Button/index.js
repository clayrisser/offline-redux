import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class StyledButton extends Component {
	static propTypes = {
		style: PropTypes.object
	};

	static defaultProps = {
		style: {}
	};

	get style() {
		return {
			...this.props.style,
			marginBottom: '20px',
			width: this.props.full ? '100%' : '50%',
			backgroundColor: !this.props.full ? '#FF0000' : ''
		};
	}

	render() {
		const props = { ...this.props };
		return <Button {...props} style={this.style} />;
	}
}

export default StyledButton;
