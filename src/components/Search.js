import React from 'react';
import Button from './Button';

export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // Store text input values.
      customerId: '',
      customerName: '',
    };
  }

  // Set the state when a search field value changes.
  handleChange(field, value) {
    let stateObj = {};
    stateObj[field] = value;
    this.setState(stateObj);
  }

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
                  <th>Customer name</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* Search by ID */ }
                  <td>
                    <input id="customerId" type="text" className="form-control"
                      placeholder="Customer id" name="customerId"
                      onChange={evt => this.handleChange('customerId', evt.target.value)}
                      value={this.state.customerId}/>
                  </td>
                  <td>
                    <Button label="Search IDs"
                      onClick={evt => this.props.search('customerId', this.state.customerId)} />
                  </td>

                  {/* Search by name */ }
                  <td>
                    <input
                      id="customerName" type="text" className="form-control"
                      placeholder="Customer name" name="customerName"
                      onChange={evt => this.handleChange('customerName', evt.target.value)}
                      value={this.state.customerName} />
                  </td>
                  <td>
                    <Button label="Search Names"
                      onClick={evt => this.props.search('customerName', this.state.customerName)} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

