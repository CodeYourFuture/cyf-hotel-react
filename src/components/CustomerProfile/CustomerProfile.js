import React, { useState, useEffect, useCallback } from "react";

import { Wrapper } from "./CustomerProfile.styles";

// component
import TouristInfoCard from "../TouristInfoCard/index";

const CustomerProfile = ({ id }) => {
  const [customerInformation, setCustomerInformation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCustomerInformationHandler = useCallback(async id => {
    setIsLoading(true);
    if (id) {
      try {
        const response = await fetch(
          `https://cyf-react.glitch.me/customers/${id}`
        );

        const data = await response.json();

        setCustomerInformation(data);
        //   console.log(customerInformation);
      } catch (error) {
        console.log(error);
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCustomerInformationHandler(id);
  }, [fetchCustomerInformationHandler, id]);
  return (
    <Wrapper>
      {isLoading && <p>Loading...</p>}
      {id && (
        <TouristInfoCard
          imageUrl="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          cityName={`${customerInformation.firstName} ${
            customerInformation.surname
          }`}
          description={`email: ${customerInformation.email} \b phone-Number: ${
            customerInformation.phoneNumber
          }`}
          button={false}
        />
      )}
    </Wrapper>
  );

  //   return <Wrapper>{id ? `Customer ${id} s profile` : ""}</Wrapper>;
};

export default CustomerProfile;
