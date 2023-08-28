// // import React, { useState } from "react";
// // import SearchButton from './SearchButton'; 

// // const Search = ({search}) => {
// //   const [searchIdsInput, setSearchIdsInput] = useState("");
// //   const [searchNamesInput, setSearchNamesInput] = useState("");

// //   const handleSearchIdsInput = (event) => {
// //     setSearchIdsInput(event.target.value);
// //     // console.log(event.target.value);
// //   };

// //   const handleSearchNamesInput = (event) => {
// //     setSearchNamesInput(event.target.value);
// //     // console.log(event.target.value);
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //   }

// //   return (
// //     <div className="search">
// //       <div className="page-header">
// //         <h4 className="text-left">Search Bookings</h4>
// //       </div>

// //       <div className="row search-wrapper">
// //         <div className="col">
// //           <form className="form-group search-box"
// //           onSubmit={handleSubmit}
// //           >
// //             <div className="label">
// //             <label htmlFor="customerName">Customer ID</label>
// //             <label className="customer-name" htmlFor="customerName">Customer name</label>
// //             </div>
// //             <div className="search-row">
// //               <input
// //                 onChange={handleSearchIdsInput}
// //                 value={searchIdsInput}
// //                 type="text"
// //                 id="customerId"
// //                 className="form-control"
// //                 placeholder="Customer id"
// //               />  
// //                <button className="search-btn btn-primary">Search IDs</button>           
// //               <input
// //                 onChange={handleSearchNamesInput}
// //                 value={searchNamesInput}
// //                 type="text"
// //                 id="customerName"
// //                 className="form-control"
// //                 placeholder="Customer name"
// //               />
// //                <button className="search-btn btn-primary">Search Names</button>
// //               {/* <SearchButton /> */}
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Search;





// import React, { useState } from "react";
// import SearchButton from './SearchButton'; 

// const Search = ({search}) => {
//   const [searchInput, setSearchInput] = useState("");
//   const[data,setData] = useState([]);



//   const handleSearch = (event) => {
//     setSearchInput(event.target.value);
//   }


//   const handleSubmit = (event) => {
//     event.preventDefault();
//     search(searchInput)  
//  }    
//  <div className="label">
//  <label htmlFor="customerName">Customer ID</label>
//  <label className="customer-name" htmlFor="customerName">Customer name</label>
//  </div>

  

//   return (
//     <div className="search">
//       <div className="page-header">
//         <h4 className="text-left">Search Bookings</h4>
//       </div>

//       <div className="row search-wrapper">
//         <div className="col">
//           <form className="form-group search-box"
//           onSubmit={handleSubmit}
//           >
            
//             <div className="search-row">
//               <input
//                 onChange={handleSearch}
//                 value={searchInput}
//                 type="text"
//                 id="customerId"
//                 className="form-control"
//                 placeholder="Customer name"
//               />  
//                <button className="search-btn btn-primary">Search</button>           
              
              
//               {/* <SearchButton /> */}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Search;







import React, { useState } from "react";
import SearchButton from './SearchButton'; 

const Search = ({search}) => {
  const [searchInput, setSearchInput] = useState("");
  const[data,setData] = useState([]);



  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    search(searchInput)  
 }    
 <div className="label">
 <label htmlFor="customerName">Customer ID</label>
 <label className="customer-name" htmlFor="customerName">Customer name</label>
 </div>

  

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>

      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box"
          onSubmit={handleSubmit}
          >
            
            <div className="search-row">
              <input
                onChange={handleSearch}
                value={searchInput}
                type="text"
                id="customerId"
                className="form-control"
                placeholder="Customer name"
              />  
               <button className="search-btn btn-primary">Search</button>           
              
              
              {/* <SearchButton /> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;


