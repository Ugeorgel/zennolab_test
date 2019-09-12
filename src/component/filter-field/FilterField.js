import React, { Component } from 'react';

import './FilterField.css';

export default class FilterField extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
	}

	handleChange(e) {
		this.setState({ value: e.target.value });
		this.props.updateState(e.target.value);
	}

	render() {
		return (
			<div className="filter-block">
				<label htmlFor="filter" className="filter__label" >Filter:</label>
				<input id="filter" type="text" className="filter__input" value={this.state.value} onChange={this.handleChange.bind(this)} />
			</div>
		)
	}
}