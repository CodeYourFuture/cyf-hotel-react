import moment from "moment";
import React, { useEffect } from "react";
import { useState } from "react";
import CustomerProfile from "./CustomerProfile";

function SearchResults(prop) {
  const [selectedIndex, setSelectedIndex] = useState();

  const [profileData, setProfileData] = useState({});

  const [id, setId] = useState(null);

  function rowClick(index) {
    if (selectedIndex === index) setSelectedIndex(null);
    else setSelectedIndex(index);
  }

  function getId(index) {
    setId(prop.results[index].id);
  }

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(response => response.json())
      .then(data => setProfileData(data));
  }, [id]);

  const { email, vip } = profileData;
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room ID</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>No of Nights</th>
          </tr>
        </thead>

        <tbody>
          {prop.results.map((data, index) => {
            return (
              <tr
                key={index}
                onClick={() => rowClick(index)}
                className={selectedIndex === index ? "red" : "white"}
              >
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.firstName}</td>
                <td>{data.surname}</td>
                <td>{data.email}</td>
                <td>{data.roomId}</td>
                <td>{data.checkInDate}</td>
                <td>{data.checkOutDate}</td>
                <td>
                  {moment(data.checkOutDate).diff(
                    moment(data.checkInDate),
                    "days"
                  )}
                </td>
                <td>
                  <button onClick={() => getId(index)}>Show Profile</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {id ? <CustomerProfile id={id} email={email} vip={vip} /> : null}
    </div>
  );
}

export default SearchResults;
