import React from "react";
import menuImage from "../assets/landingpage/right-side-tradition.png";
import flowerIcon from "../assets/icons/flowericon.png";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

const Tradition = () => {
  let title = "OUR UMAī TRADīTīON";
  let para =
    "Sushi, one of the most popular Japanese dishes, has a rich and fascinating history that dates back to the 8th century. Originally, sushi was created as a way to preserve fish by fermenting it with rice. However, over time, the preparation techniques evolved, and the dish became the beloved delicacy we know today. Interestingly, there are some lesser-known facts about sushi preparation that make it even more intriguing.";
  let breadcrumbs = "寿司の伝統 / Sushi Tradition";
  let floatingTitle = "寿司の伝統 / Sushi Tradition";
  let listOne =
    "Contrary to popular belief, sushi doesn't actually refer to raw fish. The word sushi actually refers to the vinegared rice used to make the dish, while raw fish is called sashimi.";
  let listTwo =
    "Traditionally, sushi chefs would train for years to perfect the art of making sushi. They would start by learning how to properly cook the rice, then move on to selecting and preparing the fish, and finally learn how to shape the sushi into beautiful, bite-sized pieces.";
  let listThree =
    "In Japan, there is a special type of sushi called fugu that is made with the potentially deadly pufferfish. Chefs who prepare fugu must undergo rigorous training and certification to ensure they can safely remove the toxic parts of the fish and serve it without harming diners.";
  return (
    <section className="section section-three">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="content"
        id="tradition"
      >
        <Link to="/#tradition">
          <h2 className="section-breadcrumbs">{breadcrumbs}</h2>
        </Link>
        <h1 className="section-title">
          <span className="floating-title">{floatingTitle}</span>
          {title}
        </h1>
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
      </motion.div>
      <img src={menuImage} alt="animated sushi table" height={500} />
    </section>
  );
};
export default Tradition;
