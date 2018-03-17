import React, { Component } from "react";
import TableHead from './TableHead';
import TableBody from './TableBody';
import * as FakeBookings from "../data/fakeBookings.json";


class Results extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			isFetched: false,
			sortDirection: 'asc'
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

	sort = (data, columnName) => {
		return data.sort((a,b) => {
			if (this.state.sortDirection === 'asc') {
				if (a[columnName] > b[columnName]) {
					return 1;
				} else {
					return -1;
				}
			} else {
				if (a[columnName] < b[columnName]) {
					return 1;
				} else {
					return -1;
				}
			}
		});
	}

	 handleSort = (columnName) => {
	 	let direction;
	 	if (this.state.sortDirection === 'asc') {
	 		direction = 'desc';
	 	} else {
	 		direction = 'asc';
	 	}
	 	this.setState({
	 		sortDirection: direction,
	 		data: this.sort(this.state.data, columnName)
	 	})
	 }

	render() {
		return(
			<div>
				<p>Results 
					<span> Found: </span>
					<button
					onClick={this.getData}> Get data </button>
				</p>
			
				<div className="row">
		      		<div className="col">
			        	<table className="table customers-table">
			        		<TableHead sort={this.handleSort}/>
			        		<TableBody items={this.state.data}/>
				         </table>

			         </div>
			    </div>
		    </div>
		);
	}
}

export default Results;