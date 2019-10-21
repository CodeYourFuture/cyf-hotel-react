import ButtonSearch from "./components/ButtonSearch";
import React, { Component } from "react";

export default class Search extends Component {
   constructor(props) {
      super(props);
      this.state = {
         searchInput: ""
      };
   }
   handleSearchInput = e => {
      let searchInput = this.state.searchInput;
      searchInput = e.target.value;
      this.setState({
         searchInput
      });
   };

   render() {
      return (
         <div className="search">
            <div className="page-header">
               <h4 className="text-left">Search Bookings</h4>
            </div>
            <div className="row search-wrapper">
               <div className="col">
                  <form
                     className="form-group search-box"
                     onSubmit={e =>
                        this.props.search(this.state.searchInput, e)
                     }
                  >
                     <label htmlFor="customerName">Customer name</label>
                     <div className="search-row">
                        <input
                           type="text"
                           id="customerName"
                           className="form-control"
                           placeholder="Customer Id"
                           onChange={this.handleSearchInput}
                        />
                        <ButtonSearch />
                     </div>
                  </form>
               </div>
            </div>
         </div>
      );
   }
}
