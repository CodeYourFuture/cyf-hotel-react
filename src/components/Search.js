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
        value={this.props.value}
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
  }

  getInput = (e) => {
    if (e.target.name === 'customerId') {
      this.props.updateFilter({filter: {customerId: e.target.value, customerName: ''}});
    } else {
      this.props.updateFilter({filter: {customerId: '', customerName: e.target.value}});
    }
  };

  callSearch = (e) => {
    this.props.runSearch(e);
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
                      value={this.props.customerIdInput}
                    />
                  </td>
                  <td>
                  </td>
                  <td>
                    <SearchInput 
                      inputId='customerName'
                      placeholder='customer name'
                      name='customerName'
                      handleInput={this.getInput}
                      value={this.props.customerNameInput}
                    />
                  </td>
                  <td>
                    <SearchButton 
                      label='Seach'
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
