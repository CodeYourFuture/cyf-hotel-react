import React from 'react';

class TableHead extends React.Component {
	constructor(props) {
		super(props)
	}

	render () {
		return (
			<thead>
				<tr>
					<th onClick={() => this.props.sort('title')}>Title</th>
					<th onClick={() => this.props.sort('firstName')}>First name</th>
					<th onClick={() => this.props.sort('surname')}>Surname</th>
					<th onClick={() => this.props.sort('email')}>Email</th>
					<th onClick={() => this.props.sort('roomId')}>Room id</th>
					<th onClick={() => this.props.sort('checkInDate')}>Check in date</th>
					<th onClick={() => this.props.sort('checkOutDate')}>Check out date</th>
					<th> Full days</th>
				</tr>
			</thead>
		)
	}
}

export default TableHead;