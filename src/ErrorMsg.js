import React from "react";

function ErrorMsg() {
  return (
    <div>
      <h2 className="fetchMessages">
        {" "}
        Could not fetch the data from the source...
      </h2>
    </div>
  );
}

export default ErrorMsg;
