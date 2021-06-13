import React,{useState} from "react";
import moment from "moment";
// moment().format();

const TableBody = props => {
  let dataArr = props.Body;
  let [selectedRows, setSelectedRows] = useState([]);
  const toggleHighlight = (rowId)=>{
    if(selectedRows.includes(rowId)){
      setSelectedRows(selectedRows.filter(el=>el!==rowId));
    }else{
      setSelectedRows(selectedRows.concat(rowId));
    }
  }
  return dataArr.map((data) => {
    let dateLeaving = moment(data.checkOutDate);
    let dateArriving = moment(data.checkInDate);
    
    return (
      <tr key={data.id}
      style={(selectedRows.includes(data.id))
        ? {backgroundColor:"yellow"}
        : {backgroundColor:"white"}
      }
      onClick={()=>toggleHighlight(data.id)}>
        <th>{data.id}</th>
        <td>{data.title}</td>
        <td>{data.firstName}</td> 
        <td>{data.surname}</td>
        <td>{data.email}</td>
        <td>{data.roomId}</td>
        <td>{data.checkInDate}</td>
        <td>{data.checkOutDate}</td>
        <td>{dateLeaving.diff(dateArriving, "days")}</td>
      </tr>
    );
  });
};

export default TableBody;
