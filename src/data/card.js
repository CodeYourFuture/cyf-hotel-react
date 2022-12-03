import glasgow from "../images/glasgow.jpeg";
import manchester from "../images/manchester.jpeg";
import london from "../images/london.jpg";

export default function card() {
  return [
    {
      id: 1,
      cityName: "Glasgow",
      text:
        "Glasgow is known for its trademark flair for design. It combines both old and new by being home to Europe's largest civic art collection and an edgy contemporary art scene. The city is packed with museums and galleries, many of which are free-to-visit, including the Gallery of Modern Art.",
      link: "https://www.peoplemakeglasgow.com",
      image: glasgow
    },
    {
      id: 2,
      cityName: "Manchester",
      text:
        "Manchester was right at the heart of the Revolution, becoming the UK's leading producer of cotton and textiles. Manchester is also famous for being the first industrialised city in the world. Manchester was responsible for the country's first ever working canal in 1761 and the world's first ever railway line in 1830.",
      link: "https://www.visitmanchester.com",
      image: manchester
    },
    {
      id: 3,
      cityName: "London",
      text:
        "London is the capital city of the United Kingdom. It is the U.K.'s largest metropolis and its economic, transportation, and cultural centre. London is also among the oldest of the world's great cities, with its history spanning nearly two millennia",
      link: "https://www.visitlondon.com",
      image: london
    }
  ];
}
