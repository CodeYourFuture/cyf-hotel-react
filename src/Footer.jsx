import React from "react";
import PropTypes from "prop-types";

// const Footer = ({ football }) => {
//   return (
//     <ul className="footer">
//       {football.map((obj, index) => {
//         return <li key={index}> {obj}</li>;
//       })}
//     </ul>
//   );
// };

// Footer.propTypes = {
//   contact: PropTypes.array
// };

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <ul className="footer">
        {this.props.footerArray.map((obj, index) => {
          return <li key={index}> {obj}</li>;
        })}
      </ul>
    );
  }
}

export default Footer;
