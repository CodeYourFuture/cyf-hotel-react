import React from "react";

const SpecialDeals = () => {

  const mentors = ["Ali", "Kash", "Davide", "German", "Gerald"];
//   return (
//     <div>
//         {
//             mentors.map(deal => {
//             return <p> {deal.toUpperCase()} </p>;
//         })
//     }
//     </div>
//   );
// };
return (<div>{mentors.join(',')}</div>);};
export default SpecialDeals;
