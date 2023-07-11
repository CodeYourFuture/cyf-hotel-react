const Footer =({contacts})=>{
    return (
    <footer style={{backgroundColor:"#222" ,color:'whitesmoke' ,height:'80px'}}>
        <ul style={{display:"flex" ,justifyContent: 'space-evenly'  ,paddingTop:'1.5em' ,listStyle:'none'}}>
        {contacts.map((item, index) => ( //internerating over the elements of the array and their respective indexes and creating a list of elements based on the current index 
          <li key={index} >{item}</li>  
        ))}
      </ul>
    </footer>
    );
}

export default Footer;