import React, { Component } from 'react';
import axios from 'axios';

import TableColumn from './table-column/TableColumn.js';

import './PriceTable.css';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const baseUrl = 'https://testsite.zennolab.com/items.json'

export default class PriceTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tableContent: [],
			asin: [],
			title: [],
			price: []
		}
	}

	componentDidMount() {
		axios({
			method: 'get',
			url: baseUrl
		})
			.then(response => {
				this.setState({ tableContent: response.data.items })
				this.dataGroup('asin');
				this.dataGroup('title');
				this.dataGroup('price');
			})

			.catch(err => {
				console.log('Something bad happened: ', err)
			})
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.filterString !== prevProps.filterString) {
			this.dataFilter();
		}
	}

	dataFilter() {
		axios({
			method: 'get',
			url: proxyUrl + baseUrl
		})
			.then(response => {
				response.data.items.map((item, index, array) => {
					if (item.asin.indexOf(this.props.filterString) === -1 && item.title.indexOf(this.props.filterString) === -1) {
						delete array[index];
						this.setState({ tableContent: array });
					} else {
						this.setState({ tableContent: array })
					}
					this.dataGroup('asin');
					this.dataGroup('title');
					this.dataGroup('price');
				})			
			})

			.catch(err => {
				console.log('Something bad happened: ', err)
			})
	}

	dataGroup(value) {
		const codeTemplate = 'el.' + value;
		const stateTemplate = 'prevState.' + value;
		const arr = this.state.tableContent.map(el => eval(codeTemplate));
		this.setState(prevState => {
			const state = {};
			state[value] = arr;
			return state
		})	
	}

	render() {
		
		return (
			<div className="price-table">
				<TableColumn header={'ASIN'} content={this.state.asin} />
				<TableColumn header={'Title'} content={this.state.title} />
				<TableColumn header={'Price'} content={this.state.price} />
			</div>
		)
	}
}