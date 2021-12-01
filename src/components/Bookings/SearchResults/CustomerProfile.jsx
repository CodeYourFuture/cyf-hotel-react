import { useEffect, useState } from "react";

function CustomerProfile({ id }) {
  const [customer, setCustomer] = useState({});
  const tableHead = ["ID", "Title", "FirstName", "Surname", "Email", "VIP", "PhoneNumber"];

  useEffect(async () => {
    try {
      const response = await fetch(`https://cyf-react.glitch.me/customers/${id}`);
      const data = await response.json();
      setCustomer(data);
    } catch (err) {
      console.error(err);
    }
  }, [id]);

  return (
    <table className="table text-center mt-2">
      <caption className="caption-top text-center">Customer #{id}</caption>
      <thead className="table-secondary">
        <tr>
          {tableHead.map((head, index) => (
            <th key={index}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Object.keys(customer).map((props, i) => {
            if (typeof customer[props] === "boolean") {
              return <td>{customer[props] ? "Yes" : "No"}</td>;
            }
            return <td key={i}>{customer[props]}</td>;
          })}
        </tr>
      </tbody>
    </table>
  );
}

export default CustomerProfile;
