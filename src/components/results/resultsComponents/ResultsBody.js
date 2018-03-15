import React, { Component } from 'react';

export default class ResultsBody extends Component {

	render() {
		console.log(this.props.FakeBookings)
		return (
			<div>
				<tbody>
					{this.props.FakeBookings.map((booking, i) => {
						return (
							<tr key={i}>
								<td>{booking.title}</td>
								<td>{booking.firstName}</td>
								<td>{booking.surname}</td>
								<td>{booking.email}</td>
								<td>{booking.roomId}</td>
								<td>{booking.checkInDate}</td>
								<td>{booking.checkOutDate}</td>
								<td >{parseInt((new Date(booking.checkOutDate) - new Date(booking.checkInDate)) / (1000 * 60 * 60 * 24))} days</td>
							</tr>
						);
					})}
				</tbody>
			</div>
		);
	}
}
