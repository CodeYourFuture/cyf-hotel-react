import React from "react";
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
  // console.log(props);
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
  const bookingDetails = props.results;
  console.log(bookingDetails[0]);
  const bookingKeys = Object.keys(bookingDetails[0]);
  console.log(bookingKeys);
  return (
    <div>
      <table>
        <thead>
          <tr>
            {bookingKeys.map(bookingKey => (
              <th scope="col" key={bookingKey}>
                {" "}
                {bookingKey}{" "}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bookingDetails.map((bookingDetail, i) => {
            return (
              <tr key={i}>
                {bookingKeys.map(bookingKey => (
                  <td key={bookingKey}> {bookingDetail[bookingKey]}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
  // console.log(bookingKey);
};

export default { TouristInfoCards, Heading, SearchResults, Footer };
