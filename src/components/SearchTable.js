import React from 'react';
import MyButton from './MyButton';

const SearchTable = function (props) {
    return (
        <table className="table search-table">
          <thead>
            <tr>
              <th>{props.title}</th>
              <th />
              <th></th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  id= {"searchInput" + props.id}
                  type="text"
                  className="form-control"
                  placeholder={props.placeholder}
                  name={"searchInput" + props.id}
                />
              </td>
              <td>
                 {/* <button className="btn btn-primary fn-submit-name">Search IDs</button>  */}
                 <MyButton text={props.buttonText} cssClasses="btn btn-primary fn-submit-name" />
                 {/* <MyButton text="Search Ids" cssClasses="btn btn-secondary" /> */} 
              </td>
              
            </tr>
          </tbody>
        </table>
    )
}

export default SearchTable;
