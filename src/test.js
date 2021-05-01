import React, { useState } from "react";

const NewFunc = () => {
  const [test, reTest] = useState(0);
  return (
    <div>
      <h4>click me! {test}</h4>
      <button
        onClick={() => {
          reTest(test - 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          reTest(test + 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          reTest(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default NewFunc;
