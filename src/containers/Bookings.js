import React, { Component } from 'react';
import Search from '../components/search/Search';
import Results from '../components/results/Results';

import * as FakeBookings from '../data/fakeBookings.json';

export default class Bookings extends Component {
	constructor(props) {
		super(props);
		this.state = {
			FakeBookings: [],
			text: 'Show Results',
			resultsHeading : [],
			sortDirection : 'ASC',
			selectedItems: [],
			resultStatus: null

	};
	
	}

	selectItem = (key) => {
		//console.log(key)
		//const selectedItems = this.state.selectedItems
		const { selectedItems } =  this.state
		const index = selectedItems.indexOf(key)
		if(index > -1) {
			selectedItems.splice(index, 1)
		}else {
			selectedItems.push(key)
		}
		this.setState({
			selectedItems
		})
	}
	search = () => {
		var btn = window.document.getElementById('search');
		this.setState({
			FakeBookings: FakeBookings,
			text: 'Hide Results',
			resultsHeading : ['Title', 'First Name', 'Surname', 'Email', 'Room ID', 'Check-In-Date', 'Check-Out-Date', 'Total Days Of Stay'],
			//resultsHeading: FakeBookings[1]
			resultStatus: !this.state.resultStatus

		});
		btn.innerHTML = this.state.text
		
	};

	hideSearch = () => {
		var btn = window.document.getElementById('search');
		btn.innerHTML = 'Show Results';
		this.setState({
			FakeBookings: [],
			text: 'Show Results',
			resultsHeading : [],
			resultStatus : null
		});
	};

	sortSearch = (event, sortKey) => {
		const data = FakeBookings
		if (this.state.sortDirection === 'ASC') {
			data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
			this.setState({
				sortDirection : 'DES'
			})
		}
		if (this.state.sortDirection === 'DES') {
			data.sort((a,b) => b[sortKey].localeCompare(a[sortKey]))
			this.setState({
				sortDirection : 'ASC'
			})
		}

		this.setState({
			FakeBookings: data
		})
	}

	

	render() {
		var props = {
			search: this.search,
			hideSearch: this.hideSearch,
			text: this.state.text,
			sortSearch: this.sortSearch,
			FakeBookings: this.state.FakeBookings,
			resultsHeading : this.state.resultsHeading,
			selectedItems : this.state.selectedItems,
			selectItem : this.selectItem,
			resultStatus : this.state.resultStatus

		};
		console.log(this.state)
		return (
			<div className="App-content">
				<div className="container">
					<Search {...props} />
					<Results {...props} />
				</div>
			</div>
		);
	}
}
