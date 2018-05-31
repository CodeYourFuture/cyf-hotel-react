import React from "react";

const SpecialDeals = () => {
  const deals = ["10% Off", "Kids eat free", "Two for one"];
  return <div>{deals.map(deal => <p key={deal}>{deal}</p>)}</div>;
};

export default SpecialDeals;
