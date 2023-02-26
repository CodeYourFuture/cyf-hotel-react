import TouristCardData from "./TouristCardData";

const TouristInfoCards = () => {
  return (
    <div className="cards">
      <TouristCardData
        image="London.jpg"
        title="London"
        description=";adjfajdf;kadfjkajfakjdfkajdfkjad;kfjakdfjkalsdjfklajdfkjadskfjkadhfahfadhf
        oa;dsfhajdfh"
        link="https://visitlondon.com"
      />
      <TouristCardData
        image="manchester.jpg"
        title="Manchester"
        description="nononononononononoandkfjakdfjkafjahfjahfjkahfjkahdfjkhajdkfh;ajkdhfjkahdfjkahdf
        jdfhakjdfhajdfh"
        link="https://visitmanchester.com"
      />
      <TouristCardData
        image="glasgow.jpg"
        title="Glasgow"
        description="nononononononononoandkfjakdfjkafjahfjahfjkahfjkahdfjkhajdkfh;ajkdhfjkahdfjkahdf
        jdfhakjdfhajdfh"
        link="https://peoplemakeglasgow.com"
      />
    </div>
  );
};

export default TouristInfoCards;