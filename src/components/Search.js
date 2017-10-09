import React, { Component } from 'react';  

class SearchInput extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <input
        id={this.props.inputId}
        type="text"
        className="form-control"
        placeholder={this.props.placeholder}
        name={this.props.name}
        onChange={this.props.handleInput}
      />
    );
  }
}

class SearchButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button 
        className="btn btn-primary fn-submit-name" 
        onClick={this.props.handleClicks}>
        {this.props.label}
      </button>
    );
  };
}


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {filter: {}};
  }

  getInput = (e) => {
    if (e.target.name === 'customerId') {
      this.setState({filter: {customerId: e.target.value}});
    } else {
      this.setState({filter: {customerName: e.target.value}});
    }
  };

  callSearch = (e) => {
    this.props.runSearch(e, this.state.filter);
  };

  render() {
    return (
      <div className="search">
        <div className="page-header">
          <h4 className="text-left">Search Bookings</h4>
        </div>
        <div className="row">
          <div className="col">
            <table className="table search-table">
              <thead>
                <tr>
                  <th>Customer id</th>
                  <th />
                  <th>Customer Name</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <SearchInput 
                      inputId='customerId'
                      placeholder='customer id'
                      name='customerId'
                      handleInput={this.getInput}
                    />
                  </td>
                  <td>
                    <SearchButton 
                      label='Seach IDs'
                      handleClicks={this.callSearch}
                    />
                  </td>
                  <td>
                    <SearchInput 
                      inputId='customerName'
                      placeholder='customer name'
                      name='customerName'
                      handleInput={this.getInput}
                    />
                  </td>
                  <td>
                    <SearchButton 
                      label='Seach names'
                      handleClicks={this.callSearch}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}


export default Search;
