import React, { Component } from "react";
import Search2 from "../components/Search2.js";
import Results from "../containers/Results.js";
//import FakeBookings from '../data/fakeBookings.json';

export default class Bookings extends Component {
  search = () => {
    console.info("TO DO!");
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search2 search={this.search} />
          <table>
            {/* To add information*/}
            <tr>
              {
                <td>
                  <Results results={this.results} />
                </td>
              }
              {
                <td>
                  <Results results={this.results} />
                </td>
              }
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
