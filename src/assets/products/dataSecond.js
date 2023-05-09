import uniqid from "uniqid";
import SalmonSushi from "../products/salmon-sushi.png";
import TunaSushi from "../products/tuna-sushi.png";
import ShrimpSushi from "../products/shrimp-sushi.png";
import EggSushi from "../products/egg-sushi.png";
import TekkaSushi from "../products/tekka-sushi.png";
import IkuraSushi from "../products/ikura-sushi.png";

let dataSecond = [
  {
    name: "Salmon Sushi",
    japanese: "サーモン寿司",
    id: uniqid(),
    img: SalmonSushi,
    price: 2400,
    quantity: 0,
  },
  {
    name: "Tuna Sushi",
    japanese: "まぐろ寿司",
    id: uniqid(),
    img: TunaSushi,
    price: 2200,
    quantity: 0,
  },
  {
    name: "Shrimp Sushi",
    japanese: "えび寿司",
    id: uniqid(),
    img: ShrimpSushi,
    price: 2000,
    quantity: 0,
  },
  {
    name: "Egg Sushi",
    japanese: "玉子寿司",
    id: uniqid(),
    img: EggSushi,
    price: 1900,
    quantity: 0,
  },
  {
    name: "Tekka Sushi",
    japanese: "鉄火寿司",
    id: uniqid(),
    img: TekkaSushi,
    price: 2400,
    quantity: 0,
  },
  {
    name: "Ikura Sushi",
    japanese: "サーモン寿司",
    id: uniqid(),
    img: IkuraSushi,
    price: 2400,
    quantity: 0,
  },
];

export default dataSecond;
