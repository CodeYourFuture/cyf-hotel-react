import React from "react";

//#### 2. Extract the header in its own component

//**Instructions:** Extract the `<header>` from the `src/App.js` file to be its own separate component called `Heading`. Make sure that you import and render the `<Heading />` component within `src/App.js`. In the `Heading` component, render the hotel's logo in an `<img>` (you can use `https://image.flaticon.com/icons/svg/139/139899.svg` or find your own image URL). You can adjust the CSS by editing `src/App.css` to make your Heading looks better if necessary.

//**Test:** The header should be displayed with a logo on the page.

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <img
          className="App-logo"
          src="https://cdn-icons.flaticon.com/png/512/3073/premium/3073755.png?token=exp=1648737821~hmac=3171f6f70d2b3822b7dd8c01acc3d1e8" //not working
          alt="CYF Hotel"
        />
      </header>
    </div>
  );
};

export default Header;
