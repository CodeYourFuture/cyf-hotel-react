const TuristInfoCards = (props) => {
return <div className="card">
<img src={props.image} className="card-img-top" />
<div className="card-body"style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-around" ,alignItems:"center"}}>
<h5 className="card-title" style={{display:"flex" , textAlign: "center"}}>{props.header} </h5>

<p style={{marginTop:0 ,marginBottom:10}}>{props.text}</p>
<a href={props.a} className="btn btn-primary" style={{backgroundColor:"gray"}} > Learn More</a>
</div>
</div>
}

export default TuristInfoCards;