import React from "react";
import TableHeadings from "./TableHeadings";
import FakeBookings from "./data/fakeBookings.json";
import CustomerDataTable from "./CustomerDataTable";

const DisplayBookings = props => {
  return (
    <div className="container">
      <table className="table">
        <TableHeadings
          headings={[
            "ID",
            "Title",
            "First Name",
            "Surname",
            "Email",
            "Room ID",
            "Check In Date",
            "Check Out Date",
            "Nights"
          ]}
        />
        {<CustomerDataTable results={FakeBookings} />}
      </table>
    </div>
  );
};

export default DisplayBookings;
