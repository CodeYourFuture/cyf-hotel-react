

function CustomerProfile (props) {
    
    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Customer Profile</h5>
          <p class="card-text"> Customer ID: {props.profile.id} </p>
          <p class="card-text"> Customer Email: {props.profile.email} </p>
          <p class="card-text"> Customer Status:{props.profile.vip ? "Yes" : "No"} </p>
          <p class="card-text"> Customer Phone:{props.profile.phoneNumber} </p>
        </div>
      </div>
    )
}

export default CustomerProfile