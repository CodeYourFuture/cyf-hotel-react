import React from "react";
const Heading = () => {
  return (
    <div className="App-header-section">
      <img
        className="App-header-log"
        src="data:image/jpeg;base64,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"
        alt="logo"
      />
      <h4 className="App-header">CYF Hotel</h4>
    </div>
  );
};
export default Heading;
