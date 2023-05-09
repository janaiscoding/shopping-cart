import React from "react";
import menuImage from "../assets/landingpage/right-sushi.png";
import flowerIcon from "../assets/icons/flowericon.png";
import { HashLink as Link } from "react-router-hash-link";

const Tradition = () => {
  let title = "SUSHI SALMON SPECIAL TRADITION OISHī";
  let para =
    "Oishī Japanese cuisine (Kaiseki & Sushi) aims to reconceptualise `WASHOKU`(Japanese traditional dining concept)* by innovating and creating state-of-the-art dishes made with a modern twist. *In 2013, Japanese `WASHOKU` was awarded and officially listed as one of the UNESCO World Intangible Cultural Heritage.";
  let breadcrumbs = "寿司の伝統 / Sushi Tradition";
  let listOne =
    "Salmon is a saltwater fish that spawns in fresh water, it's a fish commonly eater in America and Europe, from salmon steak and smoked salmon to lax";
  let listTwo =
    "At the first time, salmon sushi was primarily served at Oishī Restaurant, because it was cheap and delicious";
  let listThree =
    "Given the long history of sushi, salmon sushi didn't exist until about 20 years ago. It didn't seem like there were any short cuts or growth hacks of process.";
  return (
    <section className="section section-three">
      <div className="content" id="tradition">
        <Link to="/#tradition">
          <h2 className="section-breadcrumbs">{breadcrumbs}</h2>
        </Link>
        <h1 className="section-title">{title}</h1>
        <p className="section-paragraph">{para}</p>
        <ul className="menu-list">
          <li>
            <img src={flowerIcon} alt="flower list icon" width={25} /> {listOne}
          </li>
          <li>
            <img src={flowerIcon} alt="flower list icon" width={25} /> {listTwo}
          </li>
          <li>
            <img src={flowerIcon} alt="flower list icon" width={25} />{" "}
            {listThree}
          </li>
        </ul>
      </div>
      <img src={menuImage} alt="animated sushi table" width={400} />
    </section>
  );
};
export default Tradition;
