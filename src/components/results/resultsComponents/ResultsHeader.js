import React, { Component } from 'react';

export default class ResultsHeader extends Component {
	render() {
		
		
		

		return (
			<div>
				<thead>
					{/* {this.props.resultsHeading.map(resultHeading => {
							return <th onClick={e => this.props.sortSearch(e, 'firstName')} style={{cursor:'pointer'}}>{resultHeading}</th>;
						})} */}
					{/* {Object.keys(x).map((resultHeading) => {
						return <th onClick={this.props.sortSearch} style={{cursor:'pointer'}}>{resultHeading}</th>;
					})} */}

					<th onClick={e => this.props.sortSearch(e, 'title')}>{this.props.resultsHeading[0]}</th>
					<th onClick={e => this.props.sortSearch(e, 'firstName')}>{this.props.resultsHeading[1]}</th>
					<th onClick={e => this.props.sortSearch(e, 'surname')}>{this.props.resultsHeading[2]}</th>
					<th onClick={e => this.props.sortSearch(e, 'email')}>{this.props.resultsHeading[3]}</th>
					<th>{this.props.resultsHeading[4]}</th>
					<th onClick={e => this.props.sortSearch(e, 'checkInDate')}>{this.props.resultsHeading[5]}</th>
					<th onClick={e => this.props.sortSearch(e, 'checkOutDate')}>{this.props.resultsHeading[6]}</th>
					<th>{this.props.resultsHeading[7]}</th>

				</thead>
			</div>
		);
	}
}
