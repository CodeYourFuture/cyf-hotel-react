import React from "react";
import moment from "moment";

const SearchResults= props =>{
    console.log(props);
    return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">Title</th> 
					<th scope="col">First name</th>
					<th scope="col">Surname</th>
					<th scope="col">Email</th>
					<th scope="col">Room id</th>
					<th scope="col">Check in date</th>
					<th scope="col">Check out date</th>
					<th scope="col">Number of days</th>
				</tr>
			</thead>
			<tbody>
				{props.results.map(result => {
					return (
						<tr>
							<th scope="row">{result.title}</th>
							<td>{result.firstName}</td>
							<td>{result.surname}</td>
							<td>{result.email}</td>
							<td>{result.roomId}</td>
							<td>{result.checkInDate}</td>
							<td>{result.checkOutDate}</td>
							<td>{moment(result.checkOutDate).diff(result.checkInDate, 'days')}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default SearchResults;