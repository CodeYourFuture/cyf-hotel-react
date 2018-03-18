import React from 'react';
import moment from 'moment';

class TableData extends React.Component {
	render() {
		const customersData = this.props.customers;

		let row = customersData.map((item, index) => {
			return <tr className={this.props.classCss} key={index} onClick={this.props.myClick}>
				        <td>{item.title}</td>
				        <td>{item.firstname}</td>
				        <td>{item.surname}</td>
				        <td>{item.email}</td>
				        <td>{item.room_id}</td>
				        <td>{item.check_in_date}</td>
				        <td>{item.check_out_date}</td>
				        <td>{moment(item.check_out_date).diff(item.check_in_date, 'days')}</td>
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