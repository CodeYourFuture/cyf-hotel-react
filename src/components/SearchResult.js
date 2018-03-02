import React from 'react';

const SearchResult = props => (
  <div className="search">
    <div className="page-header">
      <h4 className="text-left">Results</h4>
    </div>
    <div className="row">
      <div className="col">
        <table className="table search-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>First name</th>
              <th>Sur name</th>
              <th>Email</th>
              <th />
              <th>Room id</th>
              <th>Check in date</th>
              <th>Check out date</th>
            
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mr</td>
              <td>Ibrahim</td>
              <td>Moha</td>
              <td>ibramohauk@gmail.com</td>
              <td></td>
              <td>1</td>
              <td>2017/01/02</td>
              <td>2017/02/02</td>
            </tr>
            <tr>
              <td>Mr</td>
              <td>Donald</td>
              <td>Trump</td>
              <td>donald.trump@whitehouse.gov</td>
              <td></td>
              <td>2</td>
              <td>2017/01/02</td>
              <td>2017/02/05</td>
            </tr>
            <tr>
              <td>Mr</td>
              <td>Colm</td>
              <td>O'connor</td>
              <td>colm.oconner.github@gmail.com</td>
              <td></td>
              <td>3</td>
              <td>2017/01/03</td>
              <td>2017/02/07</td>
            </tr>
            <tr>
              <td>Mr</td>
              <td>Louis</td>
              <td>Vuitton</td>
              <td>louisvuitton@fashion.org</td>
              <td></td>
              <td>4</td>
              <td>2017/01/06</td>
              <td>2017/02/010</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
export default SearchResult;
