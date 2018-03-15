import React from 'react';
import TableHead from './TableHead';
import TableData from './TableData';
import * as FakeBookings from "../data/fakeBookings.json";
// import orderBy from 'lodash/orderBy';

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
			sortDirection: 'asc'
		}
	}


	getData = () => {
		// const testSort = this.sort(FakeBookings, 'firstName');
		// console.log(testSort);
		if (this.state.isFetched === false) {
			this.setState({
				data: this.sort(FakeBookings, 'firstName'),
				isFetched: true
			})	
		}
	}

	sort = (data, columnName) => {
		return data.sort((a, b) => {
			// console.log(a[columnName]);
			// console.log(b[columnName]);
			if (this.state.sortDirection === 'asc') {
				if (a[columnName] > b[columnName]) {
					return 1
				} else {	
					return -1
				}
			} else {
				if (a[columnName] < b[columnName]) {
					return 1
				} else {	
					return -1
				}
			}
			
		});
	} 

	handleSort = (columnName) => {
		// this.setState(state => ({
		// 	columnToSort: columnName,
		// 	sortDirection: state.columnToSort === columnName ? invertDirection[state.sortDirection] : 'asc'
		// }));
		// console.log('before', this.state.data)
		// this.state.data.sort((a, b) => {
		// 	// console.log(a[columnName]);
		// 	// console.log(b[columnName]);
		// 	if (this.state.sortDirection === 'asc') {
		// 		if (a[columnName] > b[columnName]) {
		// 			return 1
		// 		} else {	
		// 			return -1
		// 		}
		// 	} else {
		// 		if (a[columnName] < b[columnName]) {
		// 			return 1
		// 		} else {	
		// 			return -1
		// 		}
		// 	}
			
		// });
		let foo;
		if(this.state.sortDirection === 'asc') {
			foo = 'desc';
		} else {
			foo = 'asc';
		}
		this.setState({
			data: this.sort(this.state.data, columnName),
			sortDirection: foo
		});

		// console.log('after', this.state.data)
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
					<TableData customers={this.state.data} 
					/>
				</table>
			</div>
		);
	}
}

export default Customers;