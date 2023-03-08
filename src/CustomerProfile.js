

function CustomerProfile (props) {
    
    function profileHandler () {
        console.log('Customer Profile', props.id)

        // <p> Customer Profile </p>
    }

    return (
        <button onClick = {profileHandler}>Show Profile</button>
    )
}

export default CustomerProfile