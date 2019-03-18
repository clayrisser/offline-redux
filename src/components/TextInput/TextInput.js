import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { TextInput as CarbonTextInput } from 'carbon-components-react';

export default class TextInput extends Component {
	static propTypes = {
		labelText: PropTypes.string,
		type: PropTypes.string,
		value: PropTypes.string,
		onChange: PropTypes.func
	};

	static defaultProps = {
		labelText: '',
		type: '',
		value: null,
		onChange: (f) => f
	};

	handleChange(e) {
		const { value } = e.target;
		this.props.onChange(value);
	}

	render() {
		return (
			<CarbonTextInput
				id="text-input"
				{...this.props}
				labelText={this.props.labelText}
				type={this.props.type}
				value={this.props.value}
				onChange={this.handleChange.bind(this)}
			/>
		);
	}
}
