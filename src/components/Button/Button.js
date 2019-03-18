import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button as CarbonButton } from 'carbon-components-react';

export default class Button extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired
	};

	static defaultProps = {
		onClick: (f) => f
	};

	render() {
		return (
			<CarbonButton type="submit" {...this.props}>
				{this.props.children}
			</CarbonButton>
		);
	}
}
