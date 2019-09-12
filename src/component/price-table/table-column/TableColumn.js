import React, { Component } from 'react';

import './TableColumn.css';

export default class TableColumn extends Component {

	componentDidUpdate() {
		this.highlightPrice();
		this.pruningString()
	}

	setStyleForItem() {
		if (this.props.header == 'Price') {
			return 'table__item--price table__item'
		} else {
			if (this.props.header == 'ASIN') {
				return 'table__item--asin table__item'
			} else return 'table__item--title table__item'
		}
	}

	setStyleForTitle() {
		if (this.props.header == 'Price') {
			return 'column__title--price column__title'
		} else {
			if (this.props.header == 'ASIN') {
				return 'column__title--asin column__title'
			} else return 'column__title--title column__title'
		}
	}

	highlightPrice() {
		const priceItem = document.querySelectorAll('.table__item--price');
		priceItem.forEach(item => {
			if (item.textContent > 80) {
				item.style.background = "#FFC4C4"
			}
		})
	}

	pruningString() {
		const titleItem = document.querySelectorAll('.table__item--title');
		titleItem.forEach(item => {
			if (item.textContent.length > 40) {
				let sliced = item.textContent.slice(0, 40);
				sliced += '...';
				item.textContent = sliced

			}
		})
		
	}

	render() {
		const data = this.props.content.map((row, i) => 
			<article key={i} className={this.setStyleForItem()}>
				{ row }
			</article>
		);
		
		return (
			<div className="table__column">
				<h2 className={this.setStyleForTitle()}>{ this.props.header }</h2>
				<div className="column__content">{ data }</div>
			</div>
		)
	}
}