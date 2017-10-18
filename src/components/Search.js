import React from 'react';
import SearchInput from './SearchInput';

const Search = props => {
  
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
              <th>"title"</th>
              <th />
              <th></th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <SearchInput isClicked= {props.isClicked} />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

)};
export default Search;
