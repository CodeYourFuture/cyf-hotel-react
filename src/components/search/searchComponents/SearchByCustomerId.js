import React, { Component } from 'react';
import Button from './Button';

class SearchByCustomerId extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col">
						<table className="table search-table">
							<thead>
								<tr>
									<th>Customer id</th>
									<th />
									<th> Customer Name</th>
									<th />
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<input
											id="customerId"
											type="text"
											className="form-control"
											placeholder="Customer id"
											name="customerId"
										/>
									</td>

									<td>
										<Button name="Search IDs" />
									</td>
									{/* Add search by name here */}
									<td>
										<input
											id="customerName"
											type="text"
											className="form-control"
											placeholder="Customer name"
											name="customerName"
										/>
									</td>
									<td>
										
										{/* { <button className="btn btn-info" id="clickMe" onClick={this.props.hideResults}>{this.props.text}</button> } */}
										<button className="btn btn-info" id="search" onClick={
											this.props.text  === 'Show Results' ? this.props.search : this.props.hideSearch
										}>{this.props.text}</button>
									</td>
									<div />
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchByCustomerId;
