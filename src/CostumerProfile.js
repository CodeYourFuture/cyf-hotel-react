import React, {useState ,useEffect} from "react";

const CostumerProfile=({id})=> {
const [customerInfo, setCustomerInfo] = useState(null);

useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then((response) => response.json())
      .then((data) => setCustomerInfo(data))
      .catch((error) => console.log(error));
  }, [id]);

 return (
     <div className="card" >
     <h5 className="card-title" style={{textAlign:"center" ,marginTop:"1em"}}>Customer {id} profile : </h5>
     {customerInfo && ( //checking if the customerInfo it has data on it, so we can prevent problems with accesing it 
     <ul style={{ display:"flex", flexDirection:"column" ,listStyle:"none"  , marginBottom:"2em"}}>
        <li>ID: {customerInfo.id}</li>
        <li>Email: {customerInfo.email}</li>
        <li>VIP: {customerInfo.vip ? "Yes" : "No"}</li>   {/*using ternerary operator to check if the person is VIP or not and dispaying the answer */}
        <li>Phone: {customerInfo.phoneNumber}</li>
      </ul>
      )}
     </div>
 )
};
export default CostumerProfile;