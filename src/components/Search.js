import React from 'react';
import Button from './Button';

const Search = (props) => {

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="itemSearch">
        <Button
          label="Customer Id"
          buttonText="Search Ids"
          handleClick={props.handleClick}
        />
        <Button
          label="Customer Name"
          buttonText="Search Names"
          handleClick={props.handleClick}
        />
      </div>
    </div>
  )
}

export default Search;

