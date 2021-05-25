import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import TableRow from "./TableRow";
import LoadingTable from "./LoadingTable";

const SearchResults = function(props) {
  if (props.error) {
    return <LoadingTable loading={false} error={props.error} />;
  } else if (props.loading) {
    return <LoadingTable loading={true} error={false} />;
  } else {
    let [customerId, setCustomerId] = useState(false);

    function search(id) {
      //added an if else to collapse the list (customer info)
      if (customerId === id) {
        setCustomerId(false);
      } else {
        setCustomerId(id);
      }
    }

    return (
      <div className="table-responsive">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th className="table-header" scope="col">
                ID
              </th>
              <th className="table-header" scope="col">
                Title
              </th>
              <th className="table-header" scope="col">
                First Name
              </th>
              <th className="table-header" scope="col">
                Last Name
              </th>
              <th className="table-header" scope="col">
                Email
              </th>
              <th className="table-header" scope="col">
                Room id
              </th>
              <th className="table-header" scope="col">
                Check in date
              </th>
              <th className="table-header" scope="col">
                Check out date
              </th>
              <th className="table-header" scope="col">
                Number of nights
              </th>
              <th className="table-header" scope="col">
                Customer Profile
              </th>
            </tr>
          </thead>
          <tbody className="table-body">
            {props.results.map((customer, customerIndex) => {
              return (
                <TableRow
                  key={customerIndex}
                  customer={customer}
                  customerIndex={customerIndex}
                  searchId={search}
                />
              );
            })}
          </tbody>
          <tfoot>
            {props.addedBooking
              ? props.addedBooking.map((customer, customerIndex) => {
                  return (
                    <TableRow
                      key={customerIndex}
                      customer={customer}
                      searchId={search}
                    />
                  );
                })
              : null}
          </tfoot>
        </table>
        <CustomerProfile selectedId={customerId} />
      </div>
    );
  }
};

export default SearchResults;
