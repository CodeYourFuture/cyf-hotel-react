// disconected from main component as created more unique component in the TorisInfoCard

const Cards = props => {
  console.log(props, "from Cards");
  return (
    <div className="card" key={props.id}>
      <img src="..." className="card-img-top" />
      <div className="card-body">
        <a href={props.href} className="btn btn-primary">
          place holder for prop
        </a>
      </div>
    </div>
  );
};

export default Cards;
