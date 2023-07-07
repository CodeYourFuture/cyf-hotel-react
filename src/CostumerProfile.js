import React, { useEffect, useState } from "react";

const CostumerProfile = ({id}) => {
   
   const [costumerProfile, setCostumerProfile] = useState(null)
   
   useEffect(() => {
      const fetchCostumerProfile = async () => {
         try {
            const res = await fetch(`https://cyf-react.glitch.me/customers/${id}`);
            const data = await res.json();
            setCostumerProfile(data);
         } catch (error) {
            console.error("Error fetching Costumer Profile:", error);
         }
      };
      if (id) {
         fetchCostumerProfile();
      }
   }, [id]);

   if (!id) {
      return null;
   }

   return(
      <div>
        {costumerProfile ? (
         <div>
            <h1>Costumer Profile {id}</h1>
            <ul>
               <li>Email: {costumerProfile.email}</li>
               <li>VIP: {costumerProfile.vip ? "Yes" : "No"}</li>
               <li>Phone Number: {costumerProfile.phoneNumber}</li>
            </ul>
         </div>
        ) : (
         <p>Loading Costumer Profile...</p>
        )}
      </div>
   );
};

export default CostumerProfile;