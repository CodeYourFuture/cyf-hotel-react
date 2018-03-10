import React from 'react';
import moment from 'moment';

class TableData extends React.Component {
	render() {
		const customersData = this.props.customers;


		let row = customersData.map((item, index) => {
			return <tr key={index}>
				        <td>{item.title}</td>
				        <td>{item.firstName}</td>
				        <td>{item.surname}</td>
				        <td>{item.email}</td>
				        <td>{item.roomId}</td>
				        <td>{item.checkInDate}</td>
				        <td>{item.checkOutDate}</td>
				        <td>{moment(item.checkOutDate).diff(item.checkInDate, 'days')}</td>
      				</tr>
		});
		return (
				<tbody id="rows">
          {row}
        </tbody>
		);
	}
}

export default TableData;