import React, { useEffect } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const SingleProduct = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  const products = {
    product1: {
      name: "Anguilla Japonica",
      description: [
        "The Japanese eel (Anguilla japonica; Japanese: 日本鰻 nihon'unagi) is a species of anguillid eel found in Japan, Korea, Taiwan, China, and Vietnam, as well as the northern Philippines. There are three main species under the Anguilla genus, and all three share very similar characteristics. Like all the eels of the genus Anguilla and the family Anguillidae, it is catadromous, meaning it spawns in the sea but lives parts of its life in freshwater. Raised in aquaculture ponds in most countries, the Japanese eel makes up 95% of the commercially sold eel in Japan.",
        "The other 5% is shipped over by air to the country from Europe. This food in Japan is called unagi; they are an essential part of the food culture, with many restaurants serving grilled eel called kabayaki. However, presumably due to a combination of overfishing and habitat loss or changing water conditions in the ocean interfering with spawning and the transport of their leptocephali, this species is endangered.",
        "Between April and November, the Japanese eels leave their freshwater river habitats in East Asia to breed larvae in the ocean near the North Equatorial Current in the western North Pacific. Adult Japanese eels migrate thousands of kilometers from freshwater rivers in East Asia to their spawning area without feeding. The eels can travel this long distance without nutrients because of the oils they collect in their bodies before the migration out to sea.",
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
        "The Atlantic bluefin tuna (Thunnus thynnus) is a species of tuna in the family Scombridae. It is variously known as the northern bluefin tuna (mainly when including Pacific bluefin as a subspecies), giant bluefin tuna [for individuals exceeding 150 kg (330 lb)], and formerly as the tunny. Atlantic bluefins are native to both the western and eastern Atlantic Ocean, as well as the Mediterranean Sea. They have become extinct in the Black Sea. The Atlantic bluefin tuna is a close relative of the other two bluefin tuna species—the Pacific bluefin tuna and the southern bluefin tuna.",
        "Atlantic bluefin tuna have been recorded at up to 680 kg (1,500 lb) in weight, and rival the black marlin, blue marlin, and swordfish as the largest Perciformes. Throughout recorded history, the Atlantic bluefin tuna has been highly prized as a food fish. Besides their commercial value as food, the great size, speed, and power they display as predators have attracted the admiration of fishermen, writers, and scientists. The Atlantic bluefin tuna has been the foundation of one of the world's most lucrative commercial fisheries. Medium-sized and large individuals are heavily targeted for the Japanese raw fish market, where all bluefin species are highly prized for sushi and sashimi.",
        "This commercial importance has led to severe overfishing. The International Commission for the Conservation of Atlantic Tunas affirmed in October 2009 that Atlantic bluefin tuna stocks had declined dramatically over the last 40 years, by 72% in the Eastern Atlantic, and by 82% in the Western Atlantic. On 16 October 2009, Monaco formally recommended endangered Atlantic bluefin tuna for an Appendix I CITES listing and international trade ban. In early 2010, European officials, led by the French ecology minister, increased pressure to ban the commercial fishing of bluefin tuna internationally. However, a UN proposal to protect the species from international trade was voted down (68 against, 20 for, and 30 abstaining)",
      ],
      img: require("../../Assets/Product-img/Bluefin_tuna/3.jpg"),
    },
    product6: {
      name: "White Albino Sturgeon Caviar",
      description: [
        "When hearing the phrase “white caviar,” you might think of a white or albino sturgeon based on the traditional definition of caviar. While this is true in some cases, white caviar doesn't always come from a fish. It's also collected from the fresh or processed eggs of escargot — land snails!In France, white caviar is known as caviar d’escargot. While this delicacy is most commonly produced in France and Poland, you can also order snail caviar from restaurants in London, Japan, Moscow, the Emirates and the United States. White escargot caviar generally comes from the European garden snail Helix aspersa maxima, one of the most common and best-known species in the world.",
        "How exactly do they harvest eggs from these land-dwelling mollusks? Heliciculture, or snail farming, is the practice of raising land snails for consumption, either for escargot or caviar. Producing sustainable amounts of escargot pearls requires highly controlled conditions like climate, lighting and temperature. ",
        "Snail caviar can also be difficult to obtain, as snails typically lay eggs once a month but produce few quality eggs at a time. Additionally, snails bury these eggs 2-4 inches beneath mud or dirt. In many cases, rain will wash away the eggs, or predators devour them in the ground. This complex harvesting process is just one of the many qualities that make escargot caviar a rare delicacy.",
      ],
      img: require("../../Assets/Product-img/White_Albino/3.webp"),
    },
    product7: {
      name: "Almas caviar",
      description: [
        "Almas caviar is a golden caviar produced from the eggs of a very rare female albino sturgeon between 60 and 100 years old, which swims in the southern Caspian Sea near Iran where apparently less pollution exists. The name 'Almas' translates to 'diamond' in Russian, and its price is almost as high as that of the precious gemstone. This variety comes from the albino beluga sturgeon that lives in the Caspian Sea, mainly in the unpolluted areas near Iran. Although this fish usually lives more than 100 years, there are very few of the albino variety left in the wild since the lack of melanin is a genetic disorder that only affects a few members of the species.",
        "The exquisite roe disappeared from people’s tables during the dark and tortuous years of the Middle Ages. It wasn’t rediscovered until the 12th century, when Russian fishermen and peasants began using it as a cheap source of protein for a population that had endured hunger and scarcity for decades. Almas has a distinct personality. It is very complex and richly nuanced, destined for palates seeking the authentic flavor of Iranian caviar. By the seventeenth century, the consumption of sturgeon roe was already associated with luxury and opulence.",
        "At present, and with the sturgeon in danger of extinction, white caviar has become a rare delicacy, exclusive and scarce. The white eggs are obtained from specimens more than 100 years old. As the sturgeon gets older, their eggs are more elegant, smooth, aromatic, and delicious with a spongier texture. This explains why their eggs have become the most sophisticated and expensive food in the world.",
      ],
      img: require("../../Assets/Product-img/Almas_caviar/3.jpg"),
    },
    product8: {
      name: "Abalone",
      description: [
        "Abalones live all over the world. They can be seen along the waters of every continent, except the Atlantic coast of South America, the Caribbean, and the East Coast of the United States. Most abalones are found in cold waters, along the coasts of New Zealand, South Africa, and Australia, and Western North America and Japan in the Northern Hemisphere. On the Chilean Pacific coast, the species called loco has a hard, black shell and is eaten by many people.",
        "Abalone has unique features: the shell is round, with two to three spirals. The last spiral is grown into a large 'ear'-like shape, which explains the name 'ear-shell'. The inside of the shell is shiny, from silvery white to green-red mother-of-pearl. Abalones can start to give birth at a small size. Their fertility is high and increases with size (from 10,000 to 11 million eggs at a time).",
        "Young abalones, called larvae, feed on plankton. The adults eat plants and feed on algae. They like to eat red algae. Their size can be as small as 20mm to as big as 200mm.The shell of the abalone is known for being very strong. It is made of very tiny calcium carbonate tiles stacked like bricks. Between the layers of tiles is a sticky protein substance. Allergic skin reactions and asthma attacks can happen when breathing the dust made when these tiles are broken down. The colorful inside part of the abalone shell can be used for decorative inlays, in guitars, for example.",
      ],
      img: require("../../Assets/Product-img/Abalone/3.jpg"),
    },
    product9: {
      name: "Lobster",
      description: [
        "Lobsters are ten-legged crustaceans closely related to shrimp and crabs. They have long bodies with muscular tails and live in crevices or burrows on the sea floor. Three of their five pairs of legs have claws, including the first pair, which are usually much larger than the others. Highly prized as seafood, lobsters are economically important and are often one of the most profitable commodities in the coastal areas they populate. Although several other groups of crustaceans have the word 'lobster' in their names, the unqualified term 'lobster' generally refers to the clawed lobsters of the family Nephropidae.",
        "Lobsters are found in all of the world’s oceans, as well as brackish environments and even freshwater. They flourish in cold, rocky waters off the Atlantic coast of North America. The lobster's thorax is composed of maxillipeds, appendages that function primarily as mouthparts, and pereiopods, appendages that serve for walking and gathering food. The abdomen includes pleopods (also known as swimmerets), used for swimming, as well as the tail fan, composed of uropods and the telson.",
        "Lobster is commonly served boiled or steamed in the shell. Diners crack the shell with lobster crackers and fish out the meat with lobster picks. The meat is often eaten with melted butter and lemon juice. Lobster is also used in soup, bisque, lobster rolls, cappon magro, and dishes such as lobster Newberg and lobster Thermidor.",
      ],
      img: require("../../Assets/Product-img/lobster/3.jpg"),
    },
    product10: {
      name: "King Crab",
      description: [
        "King crabs, scientifically classified under the family Lithodidae, are a taxon of decapod crustaceans that are chiefly found in cold seas. Because of their large size and the taste of their meat, many species are widely caught and sold as food with the most common being the red king crab (Paralithodes camtschaticus). They are generally thought to be derived from hermit crab ancestors within the Paguridae, which may explain the asymmetry still found in the adult forms. This ancestry is supported by several anatomical peculiarities which are present only in king crabs and hermit crabs.",
        "King crabs are one of the most enormous crab species known to man. They can weigh more than 11 pounds, which is heavier than a house cat, and have a total leg span of over 5 feet, which means that they can be as long as a human is tall. Some of the most popular King crabs are Alaskan king crabs, red king crabs, and Japanese crabs. This edible crab is found in the shallow waters off Japan, along the coast of Alaska, and in the Bering Sea.",
        "When you order the largest and most impressive of all crabs caught in the world, the Alaskan King Crab, you’ll taste the unmatched flavor, quality, and texture. However, it's important to note that due to their popularity as a food source, king crabs are often overfished. As of September 2023, 125 species of king crab are known in 10 genera.",
      ],
      img: require("../../Assets/Product-img/King_crab/3.webp"),
    },
    product11: {
      name: "Coffin Bay king Oysters",
      description: [
        "The Coffin Bay King Oyster is a Pacific oyster of an impressive size hailing from the pristine waters of South Australia’s Coffin Bay. Unlike most oysters which are typically grown for about 18 months, these oysters are allowed to grow for up to 6 or 7 years. The extended growth period contributes to the oysters’ distinctive size, texture, and flavor, yielding shellfish of premium quality. When shucked, the giant-sized oyster shell reveals a large piece of flesh on the inside that's often ten times meatier than that of a normal-sized oyster.",
        "The meat of the Coffin Bay King Oyster is firm, yet tender and juicy, while the flavor is sweet and complex with a crisp saltiness and an intense, oceanic, lingering finish. Often featured among the world’s most expensive food items, these oysters are best enjoyed as they are, with an optional squeeze of lemon or lime juice. The Coffin Bay area has been farming these oysters for two generations, delivering Australia's favorite oysters throughout South Australia and Australia-wide.",
        "However, it's important to note that the farming and harvesting of these oysters require careful management to ensure sustainability. The pristine waters of Coffin Bay provide an ideal environment for these oysters to grow and thrive. The farmers in this area take great pride in their work and are committed to maintaining the highest standards of quality and sustainability. This commitment is evident in the exceptional taste and quality of the Coffin Bay King Oysters.",
      ],
      img: require("../../Assets/Product-img/Coffin_Bay_king_oysters/3.jpg"),
    },
    product12: {
      name: "Sea Cucumber",
      description: [
        "Sea cucumbers, belonging to the class Holothuroidea, are marine invertebrates that live on the seafloor, predominantly in tropical regions. They are named for their unusual oblong shape that resembles a fat cucumber. There are about 1,250 species of sea cucumber, all of which belong to the taxonomic class Holothuroidea. These animals have soft bodies and powerful tentacles around their mouths, which they use for sucking in food from both the ocean floor and the water itself. They can range in size but can grow up to nearly seven feet long.",
        "Sea cucumbers are echinoderms from the class Holothuroidea. They have leathery skin and an elongated body containing a single, branched gonad. Sea cucumbers are found on the sea floor worldwide. The number of known holothurian species worldwide is about 1,786, with the greatest number being in the Asia-Pacific region. Many of these are gathered for human consumption and some species are cultivated in aquaculture systems. The harvested product is variously referred to as trepang, namako, bêche-de-mer, or balate.",
        "In addition to their culinary appeal, sea cucumbers are used in traditional folk medicine to treat a wide variety of ailments. This article looks into the nutritional benefits of sea cucumbers and whether they are worth adding to your diet. Sea cucumbers are an excellent source of nutrients. Four ounces (112 grams) of the Alaskan and sea cucumber delivers ( 3 ): Calories: 60 Protein: 14 grams Fat: less than one gram Vitamin A: 8% of the Daily Value (DV) B2 (Riboflavin): 81% of the DV B3 (Niacin): 22% of the DV Calcium: 3% of the DV Magnesium: 4% of the DV.",
      ],
      img: require("../../Assets/Product-img/Sea_Cucumber/3.jpg"),
    },
    product13: {
      name: "Percebes",
      description: [
        "Percebes, also known as goose barnacles, is a seafood delicacy. These rare crustaceans are found on rocks and driftwood off of the Galician coast in deep and dangerous waters with heavy tides. Due to the extreme conditions and high danger risk of collecting them, they cost more than $200 per pound, making them more expensive than caviar. They are most common in areas of Europe such as France and Spain at restaurants along the coastal regions. Percebes are tubular and resemble a claw or hoof. They have thick brown skin on one end and a white shell on the other.",
        "Percebes are very easy to cook, they don't require much time at all. Simply add the goose barnacles to heavily salted water and steam, boil, or blanch them. When cooking paints, you will want to add a lot of salt to the water. The salt levels should mimic seawater. While you may be curious about what spices and herbs to add to your barnacles, it is recommended that you add a spritz of lemon juice and nothing else. Cook the barnacles whole, and open them once it is time for them to be eaten. They are eaten in a similar way as crab legs.",
        "Percebes tastes like a refreshing splash of ocean water. They are mild and chewy, with a hint of sweetness. Many people compare the flavor to crab or lobster. Percebes and lobsters are both crustaceans that live in the ocean. Each has a mild flavor and is enjoyed by people at seafood restaurants. We know that gooseneck barnacles are extremely rare and can only be found in certain areas along the coast of Europe which makes them quite the delicacy.",
      ],
      img: require("../../Assets/Product-img/Percebes/3.jpg"),
    },
    product14: {
      name: "Sea Urchin",
      description: [
        "Sea urchins, also known as sea hedgehogs, sand dollars, and sea biscuits, are spiny, globular echinoderms in the class Echinoidea. About 950 species of sea urchins are distributed on the seabeds of every ocean and inhabit every depth zone from the intertidal seashore down to 5,000 meters (16,000 ft; 2,700 fathoms). They are usually globe-shaped and protected by calcareous plates and spines. Sea urchins move slowly, crawling with tube feet, and also propel themselves with their spines. Although algae are the primary diet, sea urchins also eat slow-moving (sessile) animals.",
        "Sea urchins are entirely marine and are found in every ocean and every climate, from the tropics to the polar regions. They inhabit marine benthic (sea bed) habitats, from rocky shores to hadal zone depths. The fossil record of the Echinoids dates from the Ordovician period, some 450 million years ago. The closest echinoderm relatives of the sea urchin are the sea cucumbers (Holothuroidea), which like them are deuterostomes.",
        "Sea urchins have been studied since the 19th century as model organisms in developmental biology, as their embryos were easy to observe. That has continued with studies of their genomes because of their unusual fivefold symmetry and relationship to chordates. Species such as the slate pencil urchin are popular in aquaria, where they are useful for controlling algae. Fossil urchins have been used as protective amulets.",
      ],
      img: require("../../Assets/Product-img/Sea_Urchin/3.jpg"),
    },
    product15: {
      name: "Copper River King Salmon",
      description: [
        "Copper River King Salmon, also known as Chinook, are aptly named as they are the largest of the species, often weighing in at about fifty pounds. These salmon are renowned for their succulent and buttery texture, which is a result of their natural yet wild genetics. They carry the highest amount of omega-3 fatty acids compared to other salmon species, making them the fattiest and richest in Omega-3 of the species. This high-fat content is due to the salmon's need to store energy for their long journey from the sea to the spawning grounds at the headwaters of the Copper River.",
        "Every year, May marks the beginning of the Copper River Salmon season, which stretches through September. This season is awaited around the world for its renowned wild King, Sockeye, and Coho salmon. The Copper River King Salmon are considered the crown jewel of the salmon world due to their rich energy reserves – evident in the copious supply of healthy and delicious omega-3 fatty acids stored in their bodies. The Copper River Salmon are more than just salmon: they are a culture; a driving force; and a source of life for an entire community.",
        "However, these fantastic fish are also king of the wallet and among the pricier fishes in the fish market. Their high price tag is due to their rarity and the dangerous conditions under which they must be caught. Despite this, they are considered by many to be the world's best-tasting fish, marbled with layers of fat and oil, with firm flesh that is remarkably red and rich. Whether fresh or cooked, Copper River King Salmon offers an unmatched culinary experience.",
      ],
      img: require("../../Assets/Product-img/Copper_River_king_salmon/3.webp"),
    },
    product16: {
      name: "Canadian Geoduck Clam",
      description: [
        "The Canadian Geoduck Clam, scientifically known as Panopea generosa, is a species of clam that can bury itself more than one meter deep in the gravel or sand of the ocean floor. It is the largest burrowing clam in the world and one of the longest-lived, often living over 100 years, with the oldest geoduck recorded in Canada at 168 years old. This clam is native to the coastal waters of the eastern North Pacific Ocean from Alaska to Baja California.",
        "The shell of the clam ranges from 15 centimeters (6 in) to over 20 centimeters (8 in) in length, but the extremely long siphons make the clam itself much longer than this: the 'neck' or siphons alone can be 1 meter (3 ft 3 in) in length. The geoduck is also one of the longest-living animals of any type, with a typical lifespan of 140 years. The precise longevity of geoducks can be determined from annual rings deposited in the shell which can be assigned to calendar years of formation through crossdating.",
        "Geoducks are found in beds of soft substrates (sand, mud, gravel, and crushed shells) where they burrow into the ocean floor. A developing geoduck digs about a third of a meter per year. After reaching about a meter depth into the substrate, the adult geoduck settles in for a long uneventful life. Geoducks are bivalves and have two shells that are white and somewhat rectangular. Their equal-sized valves do not conceal their enormous siphon (neck), which is white to reddish-brown.",
      ],
      img: require("../../Assets/Product-img/Canadian_Geoduck_Clam/3.webp"),
    },
    product17: {
      name: "European Dover Sole",
      description: [
        "The European Dover Sole, scientifically known as Solea solea, is a species of flatfish in the family Soleidae. It is one of the largest fish in the Solea genus. The Dover Sole is the only true sole, all other soles are Flounders marketed under the Sole name. It is mainly caught in shallow waters from the Mediterranean to the North Sea. The common sole, also known as Dover sole or black sole, lives on the sandy or muddy seabed of the northern Atlantic and the Mediterranean Sea where it often semi-immerses itself in the substrate.",
        "True Dover Sole is a thick-bodied European flatfish with eyes on the right side of the head and which grows to about 20 inches long. They have dark brown skin and longer more narrow bodies (relative to size) than other flatfish. They can live to be 45 years old and reach commercial fishing size at about age six or seven.",
        "The raw meat of European Dover Sole is white, and the filets are firm, and dense and hold together well in heavy sauces. It has an unassuming, mild sweet flavor, with a delicate texture. The fish is often prepared by steaming, salt baking, broiling, poaching, or sautéing. However, it's important to note that the European Dover Sole is over-fished, which has led to sustainability considerations in its capture and consumption.",
      ],
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
          <p>{product.description[0]}</p>
          <p>{product.description[1]}</p>
          <p>{product.description[2]}</p>
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
