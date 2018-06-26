import React from "react";
/*import React, { Component } from "react";

class Logo extends Component {
  render() {
    return (
      <header className="App-header">
        {this.props.title}
        <img
          className="cyf-image"
          src="https://codeyourfuture.io/static/media/cyf_brand.fbcea877.png"
        />
      </header>
    );
  }
}

export default Logo;
*/
const Logo = () => {
  return (
    <header className="App-header">
      Welcome to CYF Hotel
      <img
        className="cyf-image"
        alt="codeyourfuture logo"
        src="https://codeyourfuture.io/static/media/cyf_brand.fbcea877.png"
      />
    </header>
  );
};
export default Logo;
