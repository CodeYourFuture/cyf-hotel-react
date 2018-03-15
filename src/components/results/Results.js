import React, { Component } from 'react';
import ResultsHeader from './resultsComponents/ResultsHeader';
import ResultsBody from './resultsComponents/ResultsBody';

class Results extends Component {
	render() {
		
		return (
			<div>
				<div> Search Reasults </div>
				<table className="table">
					<ResultsHeader {...this.props} />
					<ResultsBody {...this.props}/>
				</table>
			</div>
		);
	}
}

export default Results;
