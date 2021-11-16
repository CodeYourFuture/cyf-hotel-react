import React from "react";

import cyfHotelLogo from "../../images/cyf-hotel-logo.jpg";

// Styles
import { Wrapper, Content, LogoImg } from "./Heading.styles";

const Heading = () => (
  <Wrapper>
    <Content>
      <LogoImg src={cyfHotelLogo} alt="cyf-hotel-logo" />
      CYF Hotel
    </Content>
  </Wrapper>
);

export default Heading;
