import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const products = {
    product1: {
      name: "Anguilla Japonica",
      description: [
        "The Japanese eel (Anguilla japonica; Japanese: 日本鰻 nihon'unagi) is a species of anguillid eel found in Japan, Korea, Taiwan, China, and Vietnam, as well as the northern Philippines¹. There are three main species under the Anguilla genus, and all three share very similar characteristics. Like all the eels of the genus Anguilla and the family Anguillidae, it is catadromous, meaning it spawns in the sea but lives parts of its life in freshwater¹. Raised in aquaculture ponds in most countries, the Japanese eel makes up 95% of the commercially sold eel in Japan.",
        "The other 5% is shipped over by air to the country from Europe. This food in Japan is called unagi; they are an essential part of the food culture, with many restaurants serving grilled eel called kabayaki¹. However, presumably due to a combination of overfishing and habitat loss or changing water conditions in the ocean interfering with spawning and the transport of their leptocephali, this species is endangered.",
        "Between April and November, the Japanese eels leave their freshwater river habitats in East Asia to breed larvae in the ocean near the North Equatorial Current in the western North Pacific¹. Adult Japanese eels migrate thousands of kilometers from freshwater rivers in East Asia to their spawning area without feeding¹. The eels can travel this long distance without nutrients because of the oils they collect in their bodies before the migration out to sea.",
      ],
      img: require("../../Assets/Product-img/Anguilla_Japonica/3.jpg"),
    },
    product2: {
      name: "Anguilla Anguilla",
      description: [
        "The European eel (Anguilla anguilla) is a species of eel, a snake-like, catadromous fish1. They are normally around 60–80 cm (2.0–2.6 ft) and rarely reach more than 1 m (3 ft 3 in), but can reach a length of up to 1.5 m (4 ft 11 in) in exceptional cases1. The European eel is native to the Atlantic coast from Scandinavia to Morocco and rivers of the North Atlantic, Baltic, and Mediterranean seas2. It is also found along the coast of Europe from the Black Sea to the White Sea.",
        "The European eel has been an important source of food both as adults (including jellied eels of East London) and as glass eels1. Glass-eel fishing using basket traps has been of significant economic value in many river estuaries on the western seaboard of Europe1. However, the European eel is now a critically endangered species1. Since the 1970s, the number of eels reaching Europe is thought to have declined by around 90% (possibly even 98%)1. Contributing factors include overfishing, parasites such as the Anguillicola crassus, barriers to migration such as hydroelectric dams, and natural changes in the North Atlantic oscillation, Gulf Stream, and North Atlantic drift1.",
        "During their life cycle, European eels migrate over huge distances to spawn2. Adult European eels migrate thousands of kilometers from freshwater rivers in East Asia to their spawning area without feeding2. The eels can travel this long distance without nutrients because of the oils they collect in their bodies before the migration out to sea.",
      ],
      img: require("../../Assets/Product-img/Anguilla_anguilla/3.jpg"),
    },
    product3: {
      name: "Anguilla Rostrata",
      description: [
        "The American eel (Anguilla rostrata) is a facultative catadromous fish found on the eastern coast of North America12. It is the only species of freshwater eel found in North America1. The American eel has a slender, supple, snake-like body that is covered with a mucus layer, which makes the eel appear to be naked and slimy despite the presence of minute scales2. Variations exist in coloration, from olive green, and brown shading to greenish-yellow and light gray or white on the belly2. Eels from clear water are often lighter than those from dark, tannic acid streams.",
        "The American eel lives in fresh water and estuaries and only leaves these habitats to enter the Atlantic Ocean to make its spawning migration to the Sargasso Sea2. Spawning takes place far offshore, where the eggs hatch2. The female can lay up to 4 million buoyant eggs and dies after egg-laying2. After the eggs hatch and the early-stage larvae develop into leptocephali, the young eels move toward North America, where they metamorphose into glass eels and enter freshwater systems where they grow as yellow eels until they begin to mature2.",
        "The American eel is found along the Atlantic coast including the tributaries of the Chesapeake Bay, the Delaware River, and the Hudson River, and as far north as the Saint Lawrence River2. It is also present in the river systems of the eastern Gulf of Mexico and some areas further south2. Like all anguillid eels, American eels hunt predominantly at night, and during the day they hide in mud, sand, or gravel very close to shore, at depths of roughly 5–6 feet (1.5–1.8 m)2. They feed on crustaceans, aquatic insects, small insects, and probably any aquatic organisms that they can find and eat.",
      ],
      img: require("../../Assets/Product-img/Anguilla_rostrate/3.jpg"),
    },
    product4: {
      name: "Anguilla Austrails",
      description: [
        "The short-finned eel (Anguilla australis), also known as the shortfin eel, is one of the 15 species of eel in the family Anguillidae. It is native to the lakes, dams, and coastal rivers of southeastern Australia, New Zealand, and much of the South Pacific, including New Caledonia, Norfolk Island, Lord Howe Island, Tahiti, and Fiji. The body of the adult short-finned eel is long and snakelike, roughly tubular and the head is small, with the jaws reaching back to below the eye or further. The color varies considerably from one individual to another; a deep olive-green is typical but it can be much lighter; golden or even (rarely) yellowish.",
        "They are common throughout the lowlands of New Zealand, including both Chatham and Stewart Island/Rakiura. In Australia, they are restricted to the area on the seaward side of the Great Dividing Range. During their life cycle however, eels migrate over huge distances to spawn. They are carnivorous, and ferocious predators, eating crustaceans, fish, frogs, birds, snakes, and Australian native water rats (rakali). The short-finned eel has a typical regeneration time of 15 to 30 years for females and it reaches a maximum size of about 1.1 m and 3 kg.",
        "The short-finned eel is an important species for commercial fisheries in its native range. It is harvested for its meat and for its roe, which is considered a delicacy in some cultures. However, overfishing and habitat destruction have led to declines in some populations of this species. Conservation efforts are underway in several regions to protect this unique species and ensure its survival for future generations.",
      ],
      img: require("../../Assets/Product-img/Anguilla_Australis/3.jpg"),
    },
    product5: {
      name: "Bluefin Tuna",
      description: [
        "The Atlantic bluefin tuna (Thunnus thynnus) is a species of tuna in the family Scombridae². It is variously known as the northern bluefin tuna (mainly when including Pacific bluefin as a subspecies), giant bluefin tuna [for individuals exceeding 150 kg (330 lb)], and formerly as the tunny². Atlantic bluefins are native to both the western and eastern Atlantic Ocean, as well as the Mediterranean Sea². They have become extinct in the Black Sea. The Atlantic bluefin tuna is a close relative of the other two bluefin tuna species—the Pacific bluefin tuna and the southern bluefin tuna.",
        "Atlantic bluefin tuna have been recorded at up to 680 kg (1,500 lb) in weight, and rival the black marlin, blue marlin, and swordfish as the largest Perciformes². Throughout recorded history, the Atlantic bluefin tuna has been highly prized as a food fish². Besides their commercial value as food, the great size, speed, and power they display as predators have attracted the admiration of fishermen, writers, and scientists. The Atlantic bluefin tuna has been the foundation of one of the world's most lucrative commercial fisheries². Medium-sized and large individuals are heavily targeted for the Japanese raw fish market, where all bluefin species are highly prized for sushi and sashimi.",
        "This commercial importance has led to severe overfishing². The International Commission for the Conservation of Atlantic Tunas affirmed in October 2009 that Atlantic bluefin tuna stocks had declined dramatically over the last 40 years, by 72% in the Eastern Atlantic, and by 82% in the Western Atlantic². On 16 October 2009, Monaco formally recommended endangered Atlantic bluefin tuna for an Appendix I CITES listing and international trade ban. In early 2010, European officials, led by the French ecology minister, increased pressure to ban the commercial fishing of bluefin tuna internationally². However, a UN proposal to protect the species from international trade was voted down (68 against, 20 for, and 30 abstaining)",
      ],
      img: require("../../Assets/Product-img/Bluefin_tuna/3.jpg"),
    },
    product6: {
      name: "White Albino Sturgeon Caviar",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/White_Albino/3.webp"),
    },
    product7: {
      name: "Almas caviar",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/Almas_caviar/3.jpg"),
    },
    product8: {
      name: "Abalone",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/Abalone/3.jpg"),
    },
    product9: {
      name: "Lobster",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/lobster/3.jpg"),
    },
    product10: {
      name: "King Crab",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/King_crab/3.webp"),
    },
    product11: {
      name: "Coffin Bay king Oysters",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/Coffin_Bay_king_oysters/3.jpg"),
    },
    product12: {
      name: "Sea Cucumber",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/Sea_Cucumber/3.jpg"),
    },
    product13: {
      name: "Percebes",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/Percebes/3.jpg"),
    },
    product14: {
      name: "Sea Urchin",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/Sea_Urchin/3.jpg"),
    },
    product15: {
      name: "Copper River King Salmon",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/Copper_River_king_salmon/3.webp"),
    },
    product16: {
      name: "Canadian Geoduck Clam",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/Canadian_Geoduck_Clam/3.webp"),
    },
    product17: {
      name: "European Dover Sole",
      description: "Description for Product 2",
      img: require("../../Assets/Product-img/European_Dover_Sole/3.jpg"),
    },
  };

  const { id } = useParams();
  const product = products[id];

  console.log(product);
  return (
    <>
      {product ? (
        <div className="main-singlepro-div">
          <img src={product.img} alt="img" className="main-singlepro-div-img" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <Link to={"/product"}>
            <button className="button-29">
              <BsArrowLeftCircle />
              Go back
            </button>
          </Link>
        </div>
      ) : (
        <p>Product Not Found !!!</p>
      )}
    </>
  );
};

export default SingleProduct;
