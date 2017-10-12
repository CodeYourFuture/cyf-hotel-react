import React from 'react'
import RenderFakeData from '../components/RenderFakeData.js'
import SortTable from './SortTable.js'


const Results = function(props){
    return  <table className="table search-table" >
      <thead>
    <tr>
      <SortTable />
      <th >title</th>
      <th >first name</th>
      <th >surname</th>
      <th >email</th>
      <th >room id</th>
      <th >check in</th>
      <th >check out</th>
      <th>days of staying</th>

    </tr>
    </thead>
    <tbody>
    {/* <TableRow title="Mr" firstName="Amir" surname="T" email="Amir@t.com" roomId="1" checkInDate="2017-10-12" checkOutDate="2017-10-19" />
    <TableRow title="Mr" firstName="Amir" surname="T" email="Amir@t.com" roomId="1" checkInDate="2017-10-12" checkOutDate="2017-10-19" />
    <TableRow title="Mr" firstName="Amir" surname="T" email="Amir@t.com" roomId="1" checkInDate="2017-10-12" checkOutDate="2017-10-19" /> */}
    <RenderFakeData {...props}/>
    </tbody>



  </table>
}

export default Results;