import React, { useState, useMemo } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
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

  const getSorted = key => {
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

  return { items: sortedItems, getSorted, sortConfig };
};

const SearchResults = props => {
  const [customerId, setCustomerId] = useState("");
  const [color, setColor] = useState([]); // set color == empty array

  const { items, getSorted } = SortableData(props.BookingsResults);

  const getCustomerId = id => {
    setCustomerId(id);
  };

  const highlightRow = currentIndex => {
    if (!color.includes(currentIndex)) {
      setColor([...color, currentIndex]);
    } else {
      setColor(color.filter(item => item !== currentIndex));
    }
  };

  //className="table-container"

  return (
    <div>
      <table className="table  results">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th
              className="pointer"
              onClick={() => getSorted("firstName")}
              scope="col"
            >
              First name
            </th>
            <th
              className="pointer"
              onClick={() => getSorted("surname")}
              scope="col"
            >
              Surname
            </th>
            <th
              className="pointer"
              onClick={() => getSorted("email")}
              scope="col"
            >
              Email
            </th>
            <th
              className="pointer"
              onClick={() => getSorted("roomId")}
              scope="col"
            >
              Room Id
            </th>
            <th
              className="pointer"
              onClick={() => getSorted("checkInDate")}
              scope="col"
            >
              Check in date
            </th>
            <th
              className="pointer"
              onClick={() => getSorted("checkOutDate")}
              scope="col"
            >
              Check out date
            </th>
            <th scope="col">Number of Night</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, currentRowIndex) => {
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

            const startDate = moment(item.checkInDate);
            const endDate = moment(item.checkOutDate);
            let numberOfNights = endDate.diff(startDate, "days", true);

            return (
              <tr
                style={
                  color.includes(currentRowIndex)
                    ? { backgroundColor: "orange" }
                    : { backgroundColor: "transparent" }
                }
                key={currentRowIndex}
                onClick={() => highlightRow(currentRowIndex)}
              >
                <td>{id}</td>
                <td>{title}</td>
                <td>{firstName}</td>
                <td>{surname}</td>
                <td>{email}</td>
                <td>{roomId}</td>
                <td>{checkInDate}</td>
                <td>{checkOutDate}</td>
                <td>{numberOfNights} </td>
                <td>
                  <button onClick={() => getCustomerId(id)}>
                    Show profile
                  </button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <CustomerProfile props={customerId} />
    </div>
  );
};

export default SearchResults;
