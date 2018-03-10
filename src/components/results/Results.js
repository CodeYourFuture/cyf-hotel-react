import React, { Component } from 'react';
import ResultsHeader from './resultsComponents/ResultsHeader';
import ResultsBody from './resultsComponents/ResultsBody';

class Results extends Component {
	render() {
		var bookedItems = this.props.FakeBookings;

		return (
			<div>
				<div> Search Reasults </div>
				<table className="table">
					<ResultsHeader bookings={bookedItems} />
					<ResultsBody bookings={bookedItems} />
				</table>
			</div>
		);
	}
}

export default Results;
