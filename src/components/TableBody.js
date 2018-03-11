import React from 'react';
import moment from 'moment';

class TableBody extends React.Component {
	constructor(props){
		super(props);

	}
	render() {
		const data = this.props.items;

		let rowWithData = data.map(function(item) {
			return (
					<tr>
						<td> {item.title} </td>
						<td> {item.firstName} </td>
						<td> {item.surname} </td>
						<td> {item.email}</td>
						<td> {item.roomId} </td>
						<td> {item.checkInDate} </td>
						<td> {item.checkOutDate} </td>
						<td> {moment(item.checkOutDate).diff(item.checkInDate, 'days')}</td>
					</tr>
					)
		})
		return (
			<tbody>

				{rowWithData}

			</tbody>
		);
	}
}

export default TableBody;