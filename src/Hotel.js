import React, { useState, useEffect, Profiler } from "react";
import Moment from "moment";
const TouristInfoCards = () => {
  return (
    <div className="card">
      <div>
        <img
          src="https://policyscotland.gla.ac.uk/wp-content/uploads/2020/07/Glasgow-scaled-2560x1280.jpg"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <a
            href="peoplemakeglasgow.com"
            target="_blank"
            className="btn btn-primary"
          >
            Visit Glasgow
          </a>
        </div>
      </div>

      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Manchester_Montage_2017.jpg"
          className="card-img-top"
          alt=" "
        />
        <div className="card-body">
          <a
            href="visitmanchester.com"
            target="_blank"
            className="btn btn-primary"
          >
            Visit Manchester
          </a>
        </div>
      </div>

      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cd/London_Montage_L.jpg"
          className="card-img-top"
          alt=" "
        />
        <div className="card-body">
          <a href="visitlondon.com" target="_blank" className="btn btn-primary">
            Visit London
          </a>
        </div>
      </div>
    </div>
  );
};

const Heading = () => {
  return (
    <div>
      <header className="App-header">CYF Hotel</header>
      <img
        className="Hotel-logo"
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
        alt=""
      />
    </div>
  );
};

const Footer = props => {
  return (
    <div>
      <ul>
        {props.Info.map((Infos, i) => {
          return <li key={i}>{Infos}</li>;
        })}
      </ul>
    </div>
  );
};

const SearchResults = props => {
  const [custID, setCustID] = useState(null);
  const handleButton = event => {
    const elID = event.currentTarget.childNodes[0].innerText;
    setCustID(elID);
  };

  const bookingDetails = props.results;
  // console.log(bookingDetails);
  const bookingKeys = Object.keys(bookingDetails[0]);
  return (
    <div>
      <table className="table table-stripe">
        <thead className="table table-danger thead-dark">
          <tr>
            {bookingKeys.map(bookingKey => (
              <th scope="col" key={bookingKey}>
                {bookingKey}
              </th>
            ))}
            <th> number of nights </th>
            <th> Customer Profile </th>
          </tr>
        </thead>
        <tbody>
          {bookingDetails.map((bookingDetail, i) => {
            return (
              <TableRow
                key={i}
                bookingKeys={bookingKeys}
                bookingDetail={bookingDetail}
                handleButton={handleButton}
              />
            );
          })}
        </tbody>
      </table>
      <CustomerProfile custID={custID} />
    </div>
  );
};

const CustomerProfile = props => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.custID}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProfile(data);
      });
  }, [props.custID]);

  return props.custID ? (
    <div>
      <h3>Customer {profile.id} Profile</h3>
      <ul>
        <li> {"Customer Identity: " + profile.id} </li>
        <li> {"Email address: " + profile.email} </li>
        <li> {"Is a VIP: " + profile.vip}</li>
        <li> {"Contact: " + profile.phoneNumber} </li>
      </ul>
    </div>
  ) : null;
};

const TableRow = props => {
  return (
    <tr key={props.i} onClick={props.handleButton}>
      {props.bookingKeys.map(bookingKey => (
        <td key={bookingKey}> {props.bookingDetail[bookingKey]}</td>
      ))}

      <td>
        {Math.round(
          Moment.duration(
            Moment(props.bookingDetail["checkOutDate"]).diff(
              Moment(props.bookingDetail["checkInDate"])
            )
          ).asDays()
        )}
      </td>
      <td>
        <button>Show Profile</button>
      </td>
    </tr>
  );
};

export default {
  TouristInfoCards,
  Heading,
  SearchResults,
  Footer,
  CustomerProfile
};
