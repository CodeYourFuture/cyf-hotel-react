import React from "react";

export default function Header({ appModes, setAppModehandler }) {
  return (
    <header className="App-header d-flex justify-content-lg-between align-items-center">
      <img src="/five-star-hotel.png" alt="CYF Hotel" />
      <select onChange={setAppModehandler} className="custom-select w-25">
        <option disabled selected>
          Select mode of the app
        </option>
        {Object.keys(appModes).map(e => (
          <option value={e} key={e}>
            {e}
          </option>
        ))}
      </select>
    </header>
  );
}
