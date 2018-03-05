import React from 'react';

class TableElement extends React.Component {
	render() {
		return (
			<td> {this.props.info} </td>
		)
	}
}

export default TableElement;