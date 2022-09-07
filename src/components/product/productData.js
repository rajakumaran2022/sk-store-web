import p1 from "./p1.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

const productData = [
  {
    id: 1,
    img: p1,
    title: "Charge Bikes Cooper",
    priceTitle: "Price:",
    price: "$789",
    iconAdd: <AiOutlineShoppingCart />,
    iconWatch: <AiFillEye />,
  },
  {
    id: 2,
    img: p1,
    title: "Diamond Back Release",
    priceTitle: "Price:",
    price: "$708",
    iconAdd: <AiOutlineShoppingCart />,
    iconWatch: <AiFillEye />,
  },
  {
    id: 3,
    img: p1,
    title: "Sk Pvot Match Trail",
    priceTitle: "Price:",
    price: "$360",
    iconAdd: <AiOutlineShoppingCart />,
    iconWatch: <AiFillEye />,
  },
  {
    id: 4,
    img: p1,
    title: "Yeti Cycles Carbon",
    priceTitle: "Price:",
    price: "$236",
    iconAdd: <AiOutlineShoppingCart />,
    iconWatch: <AiFillEye />,
  },
  {
    id: 5,
    img: p1,
    title: "Sk Joplin carbon",
    priceTitle: "Price:",
    price: "$394",
    iconAdd: <AiOutlineShoppingCart />,
    iconWatch: <AiFillEye />,
  },
];
export default productData;