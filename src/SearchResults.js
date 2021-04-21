import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import moment from "moment";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = key => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const SearchResults = props => {
  const [isActive, setIsActive] = useState(null);
  const [index, setIndex] = useState("");
  const { bookings } = props;
  let sortedResults = [...bookings];
  console.log(sortedResults);

  const { items, requestSort } = useSortableData(props.bookings);

  const toggleActive = i => {
    //Remove the if statement if you don't want to unselect an already selected item
    if (i === isActive) {
      setIsActive(isActive => (isActive = null));
    } else {
      setIsActive(isActive => (isActive = i));
    }
  };
  const getId = id => {
    setIndex(id);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => requestSort("title")}
              >
                Title
              </button>
            </th>
            <th scope="col">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => requestSort("firstName")}
              >
                Firstname
              </button>
            </th>
            <th scope="col">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => requestSort("surname")}
              >
                Surname
              </button>
            </th>
            <th scope="col">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => requestSort("email")}
              >
                Email
              </button>
            </th>
            <th scope="col">
              <button
                className="btn btn-primary"
                style={{ fontSize: "10px", padding: "30px" }}
                type="button"
                onClick={() => requestSort("roomId")}
              >
                Room id
              </button>
            </th>
            <th scope="col">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => requestSort("checkInDate")}
              >
                Check in date
              </button>
            </th>
            <th scope="col">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => requestSort("checkOutDate")}
              >
                Check out date
              </button>
            </th>
            <th scope="col">
              <button className="btn btn-primary">staying</button>
            </th>
            <th scope="col">
              <button className="btn btn-primary"> Customer Profile</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => {
            const {
              id,
              title,
              firstName,
              surname,
              email,
              roomId,
              checkInDate,
              checkOutDate
            } = item;
            var a = moment(checkOutDate);
            var b = moment(checkInDate);
            return (
              <tr
                style={
                  isActive === i ? { background: "yellow" } : { background: "" }
                }
                key={id}
                onClick={() => toggleActive(i)}
              >
                <th scope="row">{title}</th>
                <td>{firstName}</td>
                <td>{surname}</td>
                <td>{email}</td>
                <td>{roomId}</td>
                <td>{checkInDate}</td>
                <td>{checkOutDate}</td>
                <td>
                  {title} {firstName} has a booking for {a.diff(b, "days")}{" "}
                  nights
                </td>
                <td>
                  <button className="btn btn-primary" onClick={() => getId(id)}>
                    Show profile
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CustomerProfile props={index} />
    </div>
  );
};

export default SearchResults;
