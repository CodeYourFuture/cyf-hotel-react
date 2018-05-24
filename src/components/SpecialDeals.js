import React from "react";

const SpecialDeals = () => {
  const deals = ["10 % off", "20 % off", "30 % off"];
  return (
    <div className="special-deal">
      {" "}
      <em>
        There is Special deals:
        {deals.map(deal => {
          return <p>{deal}</p>;
        })}
      </em>
    </div>
  );
};

export default SpecialDeals;
