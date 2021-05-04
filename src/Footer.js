import React from "react"

function Footer(props) {
    return (
        <div className="footer">
            <ul>{props.info.map((content, index) => {
                return (<li key={index}>{content}</li>)
            })}</ul>
        </div>
    )
}
export default Footer
