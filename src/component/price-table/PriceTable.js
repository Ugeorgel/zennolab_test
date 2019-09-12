import React, { Component } from 'react';
const axios = require('axios');

var header = {
	':authority': 'testsite.zennolab.com',
	':method': 'GET',
	':path': '/items.json',
	':scheme': 'https'
}

export default class PriceTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tableContent: [] 
		}
	}



	componentDidMount() {
		axios({
			method: 'get',
			url: 'https://testsite.zennolab.com/items.json'
		})
			.then(response => {
				console.log(response)
			})

			.catch(err => {
				console.log('Something bad happened: ', err)
			})
	}

	render() {
		return (
			<p>Table</p>
		)
	}
}