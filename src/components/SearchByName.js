import React, { Component } from "react";
import Button from "./Button";

class SearchByName extends Component {
    render() {
        return (
            <div>
                <table className="table search-table">
          <thead>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  id="customerName"
                  type="text"
                  className="form-control"
                  placeholder="Customer name"
                  name="customerName"
                />
              </td>
              <td>
                {<Button name = "Search Names"/>}
              </td>
            </tr>
          </tbody>
        </table>
            </div>
        )
    }
}

export default SearchByName