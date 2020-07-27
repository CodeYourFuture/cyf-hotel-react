import React, { useState, useEffect } from "react";
import moment from "moment";
//import CustomerProfileFetcher from "./CustomerProfileFetcher"
import "./BodyRow.css";

const BodyRow = ({ content, setCustomerProf }) => {
  //const [customerProf, setCustomerProf] = useState(0);

  const [isSelected, setIsSelected] = useState(false);

  function CustomerProfileFetcher(props, setCustomerProf) {
    console.log(`https://cyf-react.glitch.me/customers/${props.id}/`);
    useEffect(() => {
      fetch(`https://cyf-react.glitch.me/customers/${props.id}/`)
        .then(res => res.json())
        .then(data => {
          setCustomerProf(data);
          console.log(data);
        });
    }, [props.id]);
    //console.log(setCustomerProf);
    //return (props.id ? <p>{props.id}</p>:null)
    //<CustomerProfileFetcher pokemon={bestPokemon} /> : null;
  }
  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const handleShowProfile = () => {
    console.log(content.id);

    return (
      <CustomerProfileFetcher
        props={content}
        setCustomerProf={setCustomerProf}
      />
    );
    //const [profile, setProfile] = useState({});

    //setCustomerProf(content);
  };

  return (
    <tr onClick={handleClick} className={isSelected ? "selected" : null}>
      <th scope="row">{content.id}</th>
      <td>{content.title}</td>
      <td>{content.firstName}</td>
      <td>{content.surname}</td>
      <td>{content.email}</td>
      <td>{content.roomId}</td>
      <td>{content.checkInDate}</td>
      <td>{content.checkOutDate}</td>
      <td>{moment(content.checkOutDate).diff(content.checkInDate, "days")}</td>
      <td>
        <button className="btn btn-primary" onClick={handleShowProfile}>
          Show Profile
        </button>
      </td>
    </tr>
  );
};
export default BodyRow;
