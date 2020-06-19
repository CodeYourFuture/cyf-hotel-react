import React, { useState, useEffect } from "react";
import SelectTable from "./SelectTable";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({
  data,
  sortByFirstName,
  sortByRoomId,
  sortSureName,
  sortByDate
}) => {
  const [profile, setProfile] = useState(null);
  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/customers/" + profile)
      .then(res => res.json())
      .then(data => setCustomerData(data))
      .catch(error => console.log(error));
  }, [profile]);
  if (!customerData) {
    return null;
  }
  return (
    <div className="table">
      <table>
        <tbody>
          <tr>
            <th />
            <th scope="co1"> Title </th>
            <th scope="co1" onClick={sortByFirstName}>
              {" "}
              FirstName
            </th>
            <th scope="co1" onClick={sortSureName}>
              {" "}
              SureName{" "}
            </th>
            <th scope="co1"> Email </th>
            <th scope="co1" onClick={sortByRoomId}>
              {" "}
              Room{" "}
            </th>
            <th scope="co1" onClick={sortByDate}>
              {" "}
              CheckInDate{" "}
            </th>
            <th scope="co1" onClick={sortByDate}>
              {" "}
              CheckOutDate{" "}
            </th>
            <th scope="co1"> Nights </th>
            <th scope="co1"> ShowProfile</th>
          </tr>
          {data.map((booking, index) => {
            return <SelectTable booking={booking} setProfile={setProfile} />;
          })}
        </tbody>
      </table>
      <CustomerProfile
        id={profile}
        data={customerData}
        setProfile={setProfile}
      />
    </div>
  );
};
export default SearchResults;
