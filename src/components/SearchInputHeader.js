 import React from 'react';

class SearchInputHeader extends React.Component {
	render () {
		return (
			<th>{this.props.header}</th>
		)
	}
}

export default SearchInputHeader;