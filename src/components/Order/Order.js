import React, { useState } from "react";

// Style
import { Wrapper } from "./Order.styles";

// components
import SearchButton from "../SearchButton";

import PropTypes from "prop-types";

const Order = ({ orderType }) => {
  let [orders, setOrders] = useState("");
  const orderOne = () => setOrders(orders + 1);

  return (
    <Wrapper>
      {orderType} {orders.length}{" "}
      <SearchButton text="Add" functionality={orderOne} />
    </Wrapper>
  );
};

Order.propTypes = {
  orderType: PropTypes.string
};

export default Order;
