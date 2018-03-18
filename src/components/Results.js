import React, { Component } from "react";
import TableHead from './TableHead';
import TableBody from './TableBody';
// import * as FakeBookings from "../data/fakeBookings.json";


class Results extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			isFetched: false,
			isLoading: false,
			sortDirection: 'asc',
			error: ''
		}
	}

	componentDidMount() {
		if (this.state.isFetched === false) {
			this.setState({
				isLoading: true
			});
			fetch(`http://localhost:8080/api/customers-details`)
	      .then(res => {
	        if (res.status >= 200 && res.status < 300) {
	          return res;
	        } else {
	          throw new Error("HTTP error");
	        }
	      })
	      .then(res => res.json())
	      .then(data => {
	        this.setState({
	         data: data.rows,
	         isFetched: true,
	         isLoading:  false
	        });
	      })
	      .catch(err => {
	        this.setState({
	        	isLoading: false,
	        	error: err.toString()
	        });
	      });
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
		if(this.state.isLoading === true) {
			return(
				<p> Loading ... </p>
			)
		} else if (this.state.error) {
			return (
				<p> {this.state.error} </p>
			)
		} else {
			return(
				<div>
					<p>Results 
						<span> Found: </span>
					</p>
				
					<div className="row">
			      		<div className="col">
				        	<table className="table customers-table">
				        		<TableHead sort={this.handleSort}/>
				        		<TableBody items={this.state.data}
				        		/>
					         </table>

				         </div>
				    </div>
			    </div>
			);
		}
	}
}

export default Results;