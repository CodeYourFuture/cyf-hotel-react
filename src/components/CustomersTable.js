import React, { Component } from "react";
import TableHead from './TableHead';
import TableBody from './TableBody';

class CustomersTable extends React.Component {
	render() {
		return(
			<div className="row">
	      		<div className="col">
		        	<table className="table customers-table">
		        		<TableHead />
		        		<TableBody />
			         </table>
		         </div>
		     </div>

		);
	}
}

export default CustomersTable;