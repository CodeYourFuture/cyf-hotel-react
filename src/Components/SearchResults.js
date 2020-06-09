import React, { useState, useEffect } from "react";
import Columns from "../Components/Table/Columns";
import Row from "./Table/Row";
import CustomerProfile from "./Table/CustomerProfile";
import { errData } from "./functions";

const SearchResults = ({ data, loading }) => {
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
    <div className="bookings">
      {err && errData()}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <table className="table table-responsive">
            <Columns data={data} />
            <tbody>
              {data.map(booking => {
                return (
                  <Row data={booking} key={booking.id} setIsShow={setIsShow} />
                );
              })}
            </tbody>
          </table>
          <CustomerProfile id={isShow} data={customerData} />
        </div>
      )}
    </div>
  );
};

export default SearchResults;
