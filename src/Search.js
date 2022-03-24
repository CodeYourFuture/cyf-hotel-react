//import React, { useState } from "react";

//const Search = (props) => {
//const [searchInput, setSearchInput] = useState("");
//const [bookng, setBookng] = useState("");
//const handledClicked = (e) => {
//console.log(e);
//setSearchInput(e.target.value);
//};

// const search = (searchVal, searchInput) => {
//   console.log(searchVal);
//   console.info("TO DO!", searchVal);
//  return searchVal.filter((val) =>
//  searchVal.firstName.toLowerCase().indexOf(searchInput) > -1)
// };

//   function Submit(e, searchInput) {
//     e.preventDefault();
//     console.log(searchInput);
//   }
//   return (
//     <div className="search">
//       <div className="page-header">
//         <h4 className="text-left">Search Bookings</h4>
//       </div>
//       <div className="row search-wrapper">
//         <div className="col">
//           <form className="form-group search-box" onSubmit={Submit}>
//             <div className="search-row">
//               <input
//                 type="text"
//                 id="customerName"
//                 value={searchInput}
//                 placeholder="Customer search..."
//                 onChange={handledClicked}
//               />
//               <button className="btn btn-primary">choice</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Search;
