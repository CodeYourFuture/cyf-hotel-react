import React from 'react';
import TableHead from './TableHead';
import TableData from './TableData';
import * as FakeBookings from "../data/fakeBookings.json";
import orderBy from 'lodash/orderBy';

const invertDirection = {
	'asc': 'desc',
	'desc': 'asc'
}

class Customers extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			isFetched: false,
			columnToSort: '',
			sortDirection: 'desc'
		}
	}


	getData = () => {
		if (this.state.isFetched === false) {
			this.setState({
				data: FakeBookings,
				isFetched: true
			})	
		}
	}

	handleSort = (columnName) => {
		this.setState(state => ({
			columnToSort: columnName,
			sortDirection: state.columnToSort === columnName ? invertDirection[state.sortDirection] : 'asc'
		}));
	}

	render() {
		// console.log(this.state.columnToSort, this.state.sortDirection);
		return (
			<div>
				<p>Find Customers: 
					<button className='btn btn-primary' onClick={this.getData}>Find</button>
				</p>
				<table className="table">
					<TableHead sort={this.handleSort} />
					<TableData customers={orderBy(
							this.state.data, 
							this.state.columnToSort, 
							this.state.sortDirection)} 
					/>
				</table>
			</div>
		);
	}
}

export default Customers;