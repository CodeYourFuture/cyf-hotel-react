import React from "react";
const inputsButton = prop => {
  const cssStyle = {
    display: "flex",
    alignItems: "center"
  };
  //commmon between this doc and booking.
  function addEntryDivBlock() {
    prop.addEntryDivBlock();
  }
  return (
    <>
      <div className="search" style={cssStyle}>
        <div className="row search-wrapper">
          <div className="col">
            <div className="form-group search-box">
              <div className="search-row">
                <button
                  onClick={addEntryDivBlock}
                  className="btn btn-primary"
                  style={{ marginLeft: "0.5rem" }}
                >
                  New Entry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default inputsButton;
