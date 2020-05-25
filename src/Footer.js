import React from "react"

function Footer(props) {
    return (
        <div className="footer">
            <ul>{props.content.map((info, index) => {
                return (<li key={index}>{info}</li>)
            })}</ul>
        </div>
    )
}
export default Footer
