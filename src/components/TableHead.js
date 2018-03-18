import React from 'react';

const TableHead = ({sort}) => {
	
		return (
			<thead>
        <tr>
          <th onClick={() => sort('title')}>Title</th>
          <th onClick={() => sort('firstName')}>First Name</th>
          <th onClick={() => sort('surname')}>Surname</th>
          <th onClick={() => sort('email')}>Email</th>
          <th onClick={() => sort('roomId')}>Room id</th>
          <th onClick={() => sort('checkInDate')}>Check in date</th>
          <th onClick={() => sort('checkOutDate')}>Check out date</th>
          <th>Nights</th>
        </tr>
       </thead>
		);
	
}

export default TableHead;