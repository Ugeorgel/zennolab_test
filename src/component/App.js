import React, { Component } from 'react';

import PriceTable from './price-table/PriceTable.js';
import FilterField from './filter-field/FilterField.js';

import './App.css';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterString: ''
		}
	}

	updateState(value) {
		this.setState({ filterString: value })
	}

	render() {
		return (
			<section className="main-content">
				<PriceTable filterString={this.state.filterString} />
				<FilterField updateState={this.updateState.bind(this)}/> 
			</section>
		)
	}
}