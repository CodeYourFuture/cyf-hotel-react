import React,{Component} from 'react';

export default class SearchButton extends Component {
       render(){
           return(
            <div>
                
        <table className="table search-table">
          <thead>
            <tr>
              <th>Customer id</th>
              <th />
              <th>customerName</th>
              <th />
            </tr>
          </thead>
            <tbody>
              <tr>
               <td>
                 <input
                  id="customerId"
                  type="text"
                  className="form-control"
                  placeholder="Customer id"
                  name="customerId"
                />
              </td>
              <td>
                <button className="btn btn-primary fn-submit-name">Search IDs</button>
              </td>
              <td>
                  <input
                   id= "ccustomerName"
                   className= "form-control"
                   placeholder = "customerName"/>
                   
              </td>
              <td>
                  <button className="btn btn-primary fn-submit-name">Search Nmaes</button>
              </td>
            
            </tr>
          </tbody>
        </table>
              
              </div>
           )
       }
    
}
             
             
              