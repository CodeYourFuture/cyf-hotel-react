import React, { Component } from 'react';
//import Button from './Button'
import SearchByCustomerId from './searchComponents/SearchByCustomerId';
import SearchByCustomerName from './searchComponents/SearchByCustomerName';
const Search = (props)=> {
  console.log(props.search)
	return (
		<div className="search">
			<div className="page-header">
				<h4 className="text-left">Search Bookings</h4>
			</div>
			<table>
				<tr>
					<td>
						
						<SearchByCustomerId props={props} />
					</td>
				</tr>
			</table>
		</div>
	);
};
export default Search;
