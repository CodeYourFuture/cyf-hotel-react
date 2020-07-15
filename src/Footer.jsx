// #### 4. Create a Footer component
//     ** Instructions:** Create a`<Footer />` component which should be
//rendered at the bottom of the page.
//Pass the following array as a prop to this component:
//`["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]`.
//Inside the component, use the data you passed as a prop to render a`<ul>`
//list with each item of the array displayed as a `<li>`.
// ** Hint:** The`.map()` method will by useful.
// ** Test:** The footer should render at the bottom of
//the page with each address property displayed as a list item.
import React from "react";

function Footer(props) {
  return (
    <ul>
      {props.footerData.map(item => {
        return <li>{item}</li>;
      })}
    </ul>
  );
}

export default Footer;
