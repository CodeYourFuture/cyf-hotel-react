import React, { Component } from 'react';
import Button from './Button'

class SearchRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleSearch = () => {
    this.props.onSearch(this.state.value, this.props.id)
  }

  render() {
    return [
      <td key={`searchrow-td-${this.props.id}-1`}>
        <input
          id={this.props.id}
          type="text"
          className="form-control"
          placeholder={this.props.title}
          name={this.props.id}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </td>,
      <td key={`searchrow-td-${this.props.id}-2`}>
        <Button
          text="Some text"
          onClick={this.handleSearch}
        />
      </td>
    ]
  }
}

const SearchBox = props => (
  <table className="table search-table">
    <thead>
      <tr>
        {props.searchAreas.map(searchArea => ([
          <th key={`searchbox-header-${searchArea.id}-1`}>{searchArea.title}</th>,
          <th key={`searchbox-header-${searchArea.id}-2`} />
        ]))}
      </tr>
    </thead>
    <tbody>
      <tr>
        {props.searchAreas.map(searchArea => {
          return (
            <SearchRow
              key={`searchbox-row-${searchArea.id}`}
              {...searchArea}
              onSearch={props.onSearch}
            />
          )
        })}
      </tr>
    </tbody>
  </table>
)

const Search = props => (
  <div className="search">
    <div className="page-header">
      <h4 className="text-left">Search Bookings</h4>
    </div>
    <div className="row">
      <div className="col">
        <SearchBox
          searchAreas={[
            {
              title: "Customer id",
              id: "customerId"
            },
            {
              title: "Customer name",
              id: "customerName"
            }
          ]}
          onSearch={props.onSearch}
        />
      </div>
    </div>
  </div>
);

export default Search;
