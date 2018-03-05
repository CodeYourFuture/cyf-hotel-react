 import React from 'react';

class SearchInput extends React.Component {
  render () {
    return (
    <td>
      <input
        id={this.props.name}
        type="text"
        className={this.props.name}
        placeholder={this.props.placeholder}
        name={this.props.name}
      />
    </td>
    )
  }
}

export default SearchInput;

