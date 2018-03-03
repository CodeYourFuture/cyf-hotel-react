import React, { Component } from "react";

class CustomersTable extends React.Component {
	render() {
		return(
			<div className="row">
	      		<div className="col">
		        	<table className="table customers-table">
			          	<thead>
			            	<tr>
			            		<th>Title</th>
			            		<th>First name</th>
			            		<th>Surname</th>
			            		<th>Email</th>
			            		<th>Room id</th>
			            		<th>Check in date</th>
			            		<th>Check out date</th>
			            	</tr>
			         </thead>
			         <tbody>
			          		<tr>
			          			<td>Mrs</td>
			          			<td>Olena</td>
			          			<td>Kashuba</td>
			          			<td>olenak@gmail.com</td>
			          			<td>1</td>
			          			<td>2018-04-01</td>
			          			<td>2018-07-01</td>
			          		</tr>
			         </tbody>
			         </table>
		         </div>
		     </div>

		);
	}
}

export default CustomersTable;