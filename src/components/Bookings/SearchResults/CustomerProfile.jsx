import { useEffect, useState } from "react";
import StatusHandler from "../StatusHandler";

function CustomerProfile({ id }) {
  const [customer, setCustomer] = useState({});
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const tableHead = ["ID", "Title", "FirstName", "Surname", "Email", "VIP", "PhoneNumber"];

  useEffect(async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://cyf-react.glitch.me/customers/${id}`);
      if (!response.ok) throw Error();
      const data = await response.json();
      setCustomer(data);
    } catch (err) {
      setError(err.name + "!");
    } finally {
      setLoading(false);
    }
  }, [id]);

  const renderTable = () => {
    if (loading) return <StatusHandler loading={loading} />;
    if (error) return <StatusHandler error={error} />;
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
  };

  return renderTable();
}

export default CustomerProfile;
