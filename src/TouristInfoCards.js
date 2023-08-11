const data = [
  {
    image:
      "https://cdn-lnp.dataweavers.io/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?rev=95097c3d2aab47109d7b0e944c804d1b?mw=640&hash=EA6D4D5963997B5F368154E65A7FA187",
    nameOfCity: "London",
    paragraf:
      "Welcome to London! Discover the best of London with Visit London, the official guide to England’s exciting capital. Find things to do in London, from iconic sightseeing spots and fun-filled days out to top restaurants, theatre and unmissable London events. If you’re not able to visit just yet, plan ahead to make the most of your next visit. ",
  },
  {
    image:
      "https://www.nationsonline.org/gallery/UK/Manchester-Town-Hall-from-Lloyd-St.jpg",
    nameOfCity: "Manchester",
    paragraf:
      "Manchester is the only UK city to feature in Lonely Planet's Best in Travel 2023 list and the only UK city in National Geographic's influential ‘Best of the World’ list which annually sets out 25 of the must-see places to visit around the globe.",
  },
  {
    image:
      "https://www.safestay.com/wp-content/uploads/2019/09/The-Best-things-to-do-in-Glasgow.png",
    nameOfCity: "Glasgow",
    paragraf: "Glasgow is cool:D",
  },
];

export default function TouristInfoCards() {
  return (
    <div className="cards-conrainer">
      {data.map((element, index) => (
        <Card
          key={index}
          image={element.image}
          paragraf={element.paragraf}
          nameOfCity={element.nameOfCity}
        />
      ))}
    </div>
  );
}

export function Card(props) {
  return (
    <div className="card">
      <div className="image-container">
        <img src={props.image} className="card-img-top"></img>
      </div>
      <div className="card-body">
        <h1 className="card-title">{props.nameOfCity}</h1>
        <p className="card-text">{props.paragraf}</p>
        <button className="btn btn-primary">More info</button>
      </div>
    </div>
  );
}
