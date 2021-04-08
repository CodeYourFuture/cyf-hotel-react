import React, { useState, useEffect } from "react";
import Columns from "../Components/Table/Columns";
import Row from "./Table/Row";
import CustomerProfile from "./Table/CustomerProfile";

const SearchResults = ({
  data,
  loading,
  error,
  setBookings,
  deleted,
  setDeleted
}) => {
  const [isShow, setIsShow] = useState(null);
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.illicitonion.com/customers/" + isShow)
      .then(res => res.json())
      .then(data => setCustomerData(data))
      .catch(error => console.log(error));
  }, [isShow]);

  function errorData() {
    return (
      <div className="error">
        <p>404</p>
        <h1>Sorry!</h1>
        <p>Something went wrong!</p>
      </div>
    );
  }

  return (
    <div>
      {error && errorData()}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <table className="table table-responsive">
            <Columns data={data} setBookings={setBookings} />

            <tbody>
              {data.map(booking => {
                return (
                  <Row
                    data={booking}
                    key={booking._id}
                    setIsShow={setIsShow}
                    deleted={deleted}
                    setDeleted={setDeleted}
                  />
                );
              })}
            </tbody>
          </table>

          <CustomerProfile
            id={isShow}
            data={customerData}
            setIsShow={setIsShow}
          />
        </>
      )}
    </div>
  );
};

export default SearchResults;
