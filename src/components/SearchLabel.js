import React from 'react';

class SearchLabel extends React.Component{
	render() {
		return (
			<th>{this.props.labelHead}</th>
		);
	}
}

export default SearchLabel;