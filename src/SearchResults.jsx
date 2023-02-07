import React, { useState, useEffect } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [id, setId] = useState(1);
  const [datas, setDatas] = useState("");

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setDatas(data);
      });
  }, [id]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Firstname</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check-in Date</th>
            <th scope="col">Check-out Date</th>
            <th scope="col">Nights</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((result, index) => {
            return (
              <tr key={index}>
                <th>{result.id}</th>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result["surname"]}</td>
                <td>{result["email"]}</td>
                <td>{result.roomId}</td>
                <td>{result["checkInDate"]}</td>
                <td>{result["checkOutDate"]}</td>

                <td>
                  {moment(result["checkOutDate"]).diff(
                    moment(result["checkInDate"]),
                    "days"
                  )}
                </td>
                <td>
                  <button
                    className={"btn btn-primary"}
                    onClick={() => setId(result.id)}
                  >
                    Show Profile
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CustomerProfile
        name={`${datas.firstName} ${datas.surname}`}
        id={datas.id}
        email={datas.email}
        vip={datas.vip ? "VIP" : "NOT VIP"}
        phone={datas.phoneNumber}
      />
    </div>
  );
};

export default SearchResults;
