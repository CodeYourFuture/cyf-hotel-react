import React from "react";
import { Button } from "reactstrap";
import "./SearchTableHead.css";

const SearchTableHead = props => {
  const { requestSort } = props;

  return (
    <tr>
      <th>
        <Button
          className="button-head"
          outline
          color="primary"
          onClick={() => requestSort("id")}
        >
          Ref.
        </Button>
      </th>
      <th>
        <Button
          className="button-head profile-guest"
          outline
          color="primary"
          block
        >
          Guest
        </Button>
      </th>
      <th>
        <Button
          className="button-head"
          outline
          color="primary"
          onClick={() => requestSort("title")}
        >
          Title
        </Button>
      </th>
      <th>
        <Button
          className="button-head button-width"
          outline
          color="primary"
          onClick={() => requestSort("firstName")}
        >
          First name
        </Button>
      </th>
      <th>
        <Button
          className="button-head button-width"
          outline
          color="primary"
          onClick={() => requestSort("surname")}
        >
          Last name
        </Button>
      </th>
      <th>
        <Button
          className="button-head"
          outline
          color="primary"
          onClick={() => requestSort("email")}
        >
          Email
        </Button>
      </th>
      <th>
        <Button
          className="button-head button-width"
          outline
          color="primary"
          onClick={() => requestSort("roomId")}
        >
          Room no.
        </Button>
      </th>
      <th>
        <Button
          className="button-head button-width"
          outline
          color="primary"
          onClick={() => requestSort("checkInDate")}
        >
          Check-in
        </Button>
      </th>
      <th>
        <Button
          className="button-head button-width"
          outline
          color="primary"
          onClick={() => requestSort("checkOutDate")}
        >
          Check-out
        </Button>
      </th>
      <th>
        <Button className="button-head profile-guest" outline color="primary">
          Nights
        </Button>
      </th>
    </tr>
  );
};

export default SearchTableHead;
