import React from 'react';

class SearchInput extends React.Component{
	render() {
		return (
			<td>
				<input 
					type="text"
					id={this.props.name}         
		      className={this.props.name}
		      placeholder={this.props.placeholder}
		      name={this.props.name}
				/>
			</td>
		);
	}
}

export default SearchInput;