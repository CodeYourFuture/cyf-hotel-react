function Footer(props) {
    return (
        <ul>
            {props.address.map((e) => <li>{e}</li>)}
        </ul>
    )
}

export default Footer;