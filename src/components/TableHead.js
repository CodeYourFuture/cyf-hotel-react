import React from 'react';

class TableHead extends React.Component {
	render () {
		return (
			<thead>
				<tr>
					<th>Title</th>
					<th>First name</th>
					<th>Surname</th>
					<th>Email</th>
					<th>Room id</th>
					<th>Check in date</th>
					<th>Check out date</th>
					<th>Full days</th>
				</tr>
			</thead>
		)
	}
}

export default TableHead;