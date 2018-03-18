import React from 'react';
import moment from 'moment';

class TableBody extends React.Component {
	render() {
		const data = this.props.items;


		let rowWithData = data.map(function(item,i) {

			return (
					<tr key={i}>
						<td> {item.title} </td>
						<td> {item.firstname} </td>
						<td> {item.surname} </td>
						<td> {item.email}</td>
						<td> {item.room_id} </td>
						<td> {item.check_in_date} </td>
						<td> {item.check_out_date} </td>
						<td> {moment(item.check_out_date).diff(item.check_in_date, 'days')}</td>
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