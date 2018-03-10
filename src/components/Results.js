import React, { Component } from "react";
import TableHead from './TableHead';
import TableBody from './TableBody';
import * as FakeBookings from "../data/fakeBookings.json";


class Results extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			data: [],
			isFetched: false
		}

		this.checkIfFetched = this.checkIfFetched.bind(this);
		this.getData = this.getData.bind(this);

		}

		checkIfFetched(event) {
			console.log('checkIfFetched is here');
			if (this.state.isFetched === false) {
				this.getData();
			}
		}
		

		getData() {
			console.log('this is', FakeBookings);
			this.setState({
				data: FakeBookings,
				isFetched: true
			})
		}

	

	render() {
		return(
			<div>
				<p>Results 
					<span> Found: </span>
					<button
					onClick={this.checkIfFetched}> Get data </button>
				</p>
			
				<div className="row">
		      		<div className="col">
			        	<table className="table customers-table">
			        		<TableHead />
			        		<TableBody items={this.state.data}/>
				         </table>

			         </div>
			    </div>
		    </div>
		);
	}
}

export default Results;