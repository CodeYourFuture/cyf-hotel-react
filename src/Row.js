import React, { useState } from "react";

const Row = props => {
  const [toogle, setToogle] = useState(false);

  const ToogleChange = () => {
    setToogle(!toogle);
  };
  return (
    <div>
      onClick = {ToogleChange}
      className = {toogle ? "chosenRow" : null}
      key = {index}
    </div>
  );
};
export default Row;
