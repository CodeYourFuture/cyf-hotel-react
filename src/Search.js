// import SearchButton from "./SearchButton";

// const Search = () => {
//   return (
//     <div className="search">
//       <div className="page-header">
//         <h4 className="text-left">Search Bookings</h4>
//       </div>
//       <div className="row search-wrapper">
//         <div className="col">
//           <form className="form-group search-box">
//             <label htmlFor="customerName">Customer name</label>
//             <div className="search-row">
//               <input
//                 type="text"
//                 id="customerName"
//                 className="form-control"
//                 placeholder="Customer name"
//               />
//               <button className="btn btn-primary">Search</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Search;


 

import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = event => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.data(
      props.search.filter(item =>
        item.firstName.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
    if (searchInput === "") {
      window.location.reload();
    }
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                value={searchInput}
                onChange={handleSearchInput}
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
              />
              <SearchButton submit={handleSubmit} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
