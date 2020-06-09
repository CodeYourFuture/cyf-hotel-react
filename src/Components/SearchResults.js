import React, { useState, useEffect } from "react";
import Columns from "../Components/Table/Columns";
import Row from "./Table/Row";
import CustomerProfile from "./Table/CustomerProfile";

const SearchResults = props => {
  const [isShow, setIsShow] = useState(null);
  const [customerData, setCustomerData] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/customers/" + isShow)
      .then(res => res.json())
      .then(data => setCustomerData(data))
      .catch(error => setErr(error));
  }, [isShow]);

  return (
    <>
      <table className="table table-responsive">
        <Columns data={props.data} />
        <tbody>
          {props.data.map(booking => {
            return (
              <Row data={booking} key={booking.id} setIsShow={setIsShow} />
            );
          })}
        </tbody>
      </table>
      <CustomerProfile id={isShow} data={customerData} />
    </>
  );
};

export default SearchResults;
