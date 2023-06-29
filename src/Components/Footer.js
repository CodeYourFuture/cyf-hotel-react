import react from "react";

const Footer = (props) =>{
            console.log('props', props);

    return(
        <footer>
            <ul>
                {props.address.map((element, index) => {
                    console.log(element)
                    console.log(index)
                    return <li key={element}>{element}</li>

                })}
            </ul>
        </footer>
    )
}
export default Footer