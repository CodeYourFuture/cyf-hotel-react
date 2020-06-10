import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import TableRow from "./TableRow";

const SearchResults = ({ results }) => {
  const [id, setId] = useState("");
  const [isActive, setIsActive] = useState(false);

  const [isSort, setIsSort] = useState(results);
  const [isSmallFirst, setSmallFirst] = useState(true);

  function handlerProfile(id) {
    setIsActive(!isActive);
    setId(id);
  }
  function handlerSortById(attr) {
    if (isSmallFirst) {
      setIsSort(results.sort((a, b) => b[attr] - a[attr]));
    } else {
      setIsSort(results.sort((a, b) => a[attr] - b[attr]));
    }
    setSmallFirst(!isSmallFirst);
  }

  function handlerSortByName(attr) {
    if (isSmallFirst) {
      setIsSort(
        results.sort((a, b) => {
          const aName = a[attr].toLowerCase();
          const bName = b[attr].toLowerCase();
          return aName < bName ? -1 : aName > bName ? 1 : 0;
        })
      );
    } else {
      setIsSort(
        results.sort((a, b) => {
          const aName = a[attr].toLowerCase();
          const bName = b[attr].toLowerCase();
          return bName < aName ? -1 : bName > aName ? 1 : 0;
        })
      );
    }
    setSmallFirst(!isSmallFirst);
  }
  function handlerSort(attr) {
    if (
      attr === "surname" ||
      attr === "firstName" ||
      attr === "email" ||
      attr === "title"
    ) {
      handlerSortByName(attr);
    } else if (attr === "id" || attr === "roomId") {
      handlerSortById();
    }

    setSmallFirst(!isSmallFirst);
  }

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th
              onClick={() => {
                handlerSortById(id);
              }}
              scope="col "
            >
              id
            </th>
            <th
              onClick={() => {
                handlerSort("title");
              }}
              scope="col"
            >
              title
            </th>
            <th
              onClick={() => {
                handlerSort("firstName");
              }}
              scope="col"
            >
              first name
            </th>

            <th
              onClick={() => {
                handlerSort("surname");
              }}
              scope="col"
            >
              surname
            </th>
            <th
              onClick={() => {
                handlerSort("email");
              }}
              scope="col"
            >
              email
            </th>
            <th
              onClick={() => {
                handlerSortById("roomId");
              }}
              scope="col"
            >
              room id{" "}
            </th>
            <th scope="col">check in date</th>
            <th scope="col">check out data</th>
            <th scope="col">number of nights</th>
          </tr>
        </thead>

        <tbody className="result">
          {isSort.map((result, index) => {
            return (
              <TableRow
                result={result}
                key={index}
                handlerProfile={handlerProfile}
              />
            );
          })}
        </tbody>
      </table>
      {isActive && <CustomerProfile id={id} />}
    </div>
  );
};
export default SearchResults;
