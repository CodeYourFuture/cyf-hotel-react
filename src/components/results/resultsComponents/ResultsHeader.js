import React, { Component } from 'react';

export default class ResultsHeader extends Component {
    
	render() {
        //var results = this.props.bookings[0]
        //console.log(results)
		
		return (
			<div>
				<thead>
					<th>Title</th>
					<th>First Name</th>
					<th>Surname</th>
					<th>Email</th>
					<th>Room ID</th>
					<th>Check-in-Date</th>
					<th>Check out date</th>
					<th>Total days of stay</th>
					
				</thead>
			</div>
		);
	}
}

