import React, { useState } from "react";
import moment from "moment";

// function SearchDetails({ detail, updateProfile, setCustomerProfile }) {
//   const [active, setActive] = useState(false);
//   const [customerInfo, setCustomerInfo] = useState(null);

//   function handleRowClick() {
//     setActive(!active);
//   }

//   //  useEffect(() => {
//   //   fetch("https://cyf-react.glitch.me")
//   //     .then((response) => response.json())
//   //     .then((data) => setBookings(data))
//   //     .catch((error) => console.log(error));
//   // }, []);

//   // useEffect(() => {
//   //   fetch(`https://cyf-react.glitch.me/customers/${detail.id}`)
//   //     .then((response) => response.json())
//   //     .then((data) => updateProfile(data))
//   //     .catch((error) => console.log(error));
//   // }, [detail.id]);

//   function fetchProfileData() {
//     fetch(`https://cyf-react.glitch.me/customers/${detail.id}`)
//       .then((response) => response.json())
//       .then((data) => updateProfile(data))
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   return (
//     <tr
//       key={detail.id}
//       onClick={handleRowClick}
//       className={active ? "pink" : ""}
//     >
//       <td>{detail.id}</td>
//       <td>{detail.title}</td>
//       <td>{detail.firstName}</td>
//       <td>{detail.surname}</td>
//       <td>{detail.email}</td>
//       <td>{detail.roomId}</td>
//       <td>{detail.checkInDate}</td>
//       <td>{detail.checkOutDate}</td>
//       <td>{moment(detail.checkOutDate).diff(detail.checkInDate, "days")}</td>
//       <td>
//         <button
//           className="btn btn-primary"
//           onClick={() => {
//             // console.log(detail.id);
//             // setCustomerInfo(detail.id);
//             // console.log(customerInfo);
//             // customerProfile(detail.id);
//             // fetchProfileData();
//             setCustomerProfile(detail.id);
//           }}
//         >
//           Show Profile
//         </button>
//       </td>
//     </tr>
//   );
// }

function SearchDetails({ detail, setCustomerProfile }) {
  const [active, setActive] = useState(false);
  // const [customerInfo, setCustomerInfo] = useState(null);

  function handleRowClick() {
    setActive(!active);
  }

  return (
    <tr
      key={detail.id}
      onClick={handleRowClick}
      className={active ? "pink" : ""}
    >
      <td>{detail.id}</td>
      <td>{detail.title}</td>
      <td>{detail.firstName}</td>
      <td>{detail.surname}</td>
      <td>{detail.email}</td>
      <td>{detail.roomId}</td>
      <td>{detail.checkInDate}</td>
      <td>{detail.checkOutDate}</td>
      <td>{moment(detail.checkOutDate).diff(detail.checkInDate, "days")}</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => {
            setCustomerProfile(detail.id);
          }}
        >
          Show Profile
        </button>
      </td>
    </tr>
  );
}

export default SearchDetails;
