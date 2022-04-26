import { useEffect } from "react";

const CustomerProfile = props => {
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => console.log(data));
  }, [props.id]);

  return `Customer ${props.id} Profile,`;
};

export default CustomerProfile;
