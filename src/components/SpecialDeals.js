import React from "react";
const SpecialDeals = () => {
  const deals = ["2 for 1", "20% off", "10% off"];
  return <div>{deals.map(deal => <p>{deal}</p>)}</div>;
};
export default SpecialDeals;
