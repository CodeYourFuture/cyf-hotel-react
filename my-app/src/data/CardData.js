import glasgow from "../images/glasgow.jpeg";
import manchester from "../images/manchester.webp";
import london from "../images/london.webp";

export default function Data() {
  return [
    {
      id: 1,
      cityName: "Glasgow",
      img: glasgow,
      text:
        "Glasgow is a port city on the River Clyde in Scotland's western Lowlands. It's famed for its Victorian and art nouveau architecture, a rich legacy of the city's 18th–20th-century prosperity due to trade and shipbuilding. Today it's a national cultural hub, home to institutions including the Scottish Opera, Scottish Ballet and National Theatre of Scotland, as well as acclaimed museums and a thriving music scene. ",
      link: " https://peoplemakeglasgow.com/"
    },
    {
      id: 2,
      cityName: "London",
      img: london,
      text:
        "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.",
      link: "https://www.visitlondon.com/"
    },
    {
      id: 3,
      cityName: "Manchester",
      img: manchester,
      text:
        "Manchester is a major city in the northwest of England with a rich industrial heritage. The Castlefield conservation area’s 18th-century canal system recalls the city’s days as a textile powerhouse, and visitors can trace this history at the interactive Museum of Science & Industry. The revitalised Salford Quays dockyards now house the Daniel Libeskind-designed Imperial War Museum North and the Lowry cultural centre.",
      link: "https://www.visitmanchester.com/"
    }
  ];
}
