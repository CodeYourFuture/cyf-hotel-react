import React from "react";

const Time = () => {
  setInterval(Time, 1000);
  const time = new Data();
  time.toLocaleTimeString();
  return (
    <div className="time">
      <p> </p>
      <p>{time} hiiiiii</p>
    </div>
  );
};
export default Time;
