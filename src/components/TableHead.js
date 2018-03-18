import React from 'react';

class TableHead extends React.Component {
	render () {
		return (
			<thead>
				<tr>
					<th onClick={() => this.props.sort('title')}>Title</th>
					<th onClick={() => this.props.sort('firstname')}>First name</th>
					<th onClick={() => this.props.sort('surname')}>Surname</th>
					<th onClick={() => this.props.sort('email')}>Email</th>
					<th onClick={() => this.props.sort('room_id')}>Room id</th>
					<th onClick={() => this.props.sort('check_in_date')}>Check in date</th>
					<th onClick={() => this.props.sort('check_out_date')}>Check out date</th>
					<th> Full days</th>
				</tr>
			</thead>
		)
	}
}

export default TableHead;