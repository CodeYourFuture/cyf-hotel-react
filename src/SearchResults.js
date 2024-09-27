import React from "react";

function SearchResults(props) {
	return (
		<table className="table">
			<thead className="thead-dark">
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Title</th>
					<th scope="col">First Name</th>
					<th scope="col">Last Name</th>
					<th scope="col">Email</th>
					<th scope="col">Room ID</th>
					<th scope="col">Check in date</th>
					<th scope="col">Check out date</th>
					<th scope="col">Number of Nights</th>
				</tr>
			</thead>

			{props.results.map((info) => (
				<tbody>
					<td scope="row" key={info.id}>
						{info.id}
					</td>
					<td>{info.title} </td>
					<td>{info.firstName}</td>
					<td>{info.surname}</td>
					<td>{info.email}</td>
					<td>{info.roomId}</td>
					<td>{info.checkInDate}</td>
					<td>{info.checkOutDate}</td>
					<td>
						{(new Date(info.checkOutDate).valueOf() -
							new Date(info.checkInDate).valueOf()) /
							86400000}
					</td>
				</tbody>
			))}
		</table>
	);
}

export default SearchResults;
