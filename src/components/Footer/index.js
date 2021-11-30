import React from "react";
import PropTypes from "prop-types";

// Style
import { Wrapper, Content } from "./Footer.styles";

const Footer = ({ footerArr }) => (
  <Wrapper>
    <Content>
      <ul>
        {footerArr.map((footerField, index) => (
          <li key={index}>{footerField}</li>
        ))}
      </ul>
    </Content>
  </Wrapper>
);

Footer.propTypes = {
  footerArr: PropTypes.array
};

export default Footer;
