import React, { useState } from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <>
      <ul>
        <Order orderType="pizza" />
      </ul>
    </>
  );
};

export default Restaurant;
