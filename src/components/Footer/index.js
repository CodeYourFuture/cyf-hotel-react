import React from "react";

// Style
import { Wrapper, Content } from "./Footer.styles";

const Footer = ({ footerArr }) => (
  <Wrapper>
    <Content>
      <ul>
        {footerArr.map(footerField => (
          <li>{footerField}</li>
        ))}
      </ul>
    </Content>
  </Wrapper>
);

export default Footer;
