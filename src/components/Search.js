import React from "react";
import SearchButton from "./SearchButton";
import SearchFiled from "./SearchFiled";

const Search = props => (
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
              <th />
              <th>Customer Nmae</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SearchFiled name="id" action="setSearchId" />
              </td>
              <td>
                <SearchButton
                  search={Search}
                  toggleContent={props.toggleContent}
                  value="Search Id"
                />
              </td>
              <td>
                <SearchFiled name="name" action="setSeachName" />
              </td>
              <td>
                <SearchButton
                  search={Search}
                  name="name"
                  toggleContent={props.toggleContent}
                  value="Search Name"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
export default Search;
