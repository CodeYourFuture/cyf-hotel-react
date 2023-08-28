import { useState } from "react";

const Test= ()=> {

 
const [showbutton,setShowbutton]= useState(true);
const [showalert,setShowalert]= useState(false);

const Alert =()=>{
    return(
    <div    className="alert alert-warning alert-dismissible fade show" role="alert">
    <p>this is my alert </p>
    <button  className="btn-close" aria-label="Close" onClick={handleclick}>  close   </button>
    </div>)
}

const handleclick =()=> {  

    setShowbutton(!showbutton);
    setShowalert(!showalert);

     };

    return(
 <>   
{ 
showbutton ? (<button className="btn btn-primary" onClick= {handleclick}>test </button>  ): ( <Alert/>  )
 }

</>
    );

}

export default Test;