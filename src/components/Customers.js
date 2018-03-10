import React from 'react';
import TableHead from './TableHead';
import TableData from './TableData';
import * as FakeBookings from "../data/fakeBookings.json";

class Customers extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			isFetched: false
		}
	}


	getData = () => {
		// console.log('this is', FakeBookings);
		if (this.state.isFetched === false) {
			this.setState({
				data: FakeBookings,
				isFetched: true
			})	
		}

	}
	render() {
		return (
			<div>
				<p>Find Customers: 
					<button className='btn btn-primary' onClick={this.getData}>Find</button>
				</p>
				<table className="table">
					<TableHead />
					<TableData customers={this.state.data}/>
				</table>
			</div>
		);
	}
}

export default Customers;