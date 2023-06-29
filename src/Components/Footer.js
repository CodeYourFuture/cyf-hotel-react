import react from "react";

const Footer = (props) =>{
    return(
        <footer>
            <ul>
                {props.address.map(element => {
                    return <li key={element}>{element}</li>
                })}
            </ul>
        </footer>
    )
}
export default Footer