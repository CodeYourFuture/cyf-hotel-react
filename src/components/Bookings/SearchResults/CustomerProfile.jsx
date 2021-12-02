import { useEffect, useState } from "react";

function CustomerProfile({ id }) {
  const [customer, setCustomer] = useState({});
  const tableHead = ["ID", "Title", "FirstName", "Surname", "Email", "VIP", "PhoneNumber"];

  useEffect(async () => {
    try {
      const data = await fetch(`https://cyf-react.glitch.me/customers/${id}`).then((res) => res.json());
      setCustomer(data);
    } catch (err) {
      console.error(err);
    }
  }, [id]);

  return (
    <table className="table text-center mt-2">
      <caption className="caption-top text-center">Customer #{id}</caption>
      <thead className="table-secondary table-danger">
        <tr>
          {tableHead.map((head, index) => (
            <th key={index}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Object.keys(customer).map((props, index) => {
            if (typeof customer[props] === "boolean") {
              return <td key={index}>{customer[props] ? "Yes" : "No"}</td>;
            }
            return <td key={index}>{customer[props]}</td>;
          })}
        </tr>
      </tbody>
    </table>
  );
}

export default CustomerProfile;
