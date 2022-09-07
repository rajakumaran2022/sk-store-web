import newbike from "./newbike.png";
import newshoe from "./newshoe.png";
import newhelmet from "./newhelmet.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

const newData = [
  {
    id: 1,
    image: newbike,
    name: "Niner Air 9",
    priceTit: "Price:",
    price$: "$250-$899",
    iconshopping: <AiOutlineShoppingCart />,
    iconlike: <AiOutlineHeart />,
    iconeye: <AiFillEye />,
  },
  {
    id: 2,
    image: newhelmet,
    name: "Wakeboard Helmet",
    priceTit: "Price:",
    price$: "$375",
    iconshopping: <AiOutlineShoppingCart />,
    iconlike: <AiOutlineHeart />,
    iconeye: <AiFillEye />,
  },
  {
    id: 3,
    image: newbike,
    name: "Carbon Niner Air 9",
    priceTit: "Price:",
    price$: "$489",
    iconshopping: <AiOutlineShoppingCart />,
    iconlike: <AiOutlineHeart />,
    iconeye: <AiFillEye />,
  },
  {
    id: 4,
    image: newshoe,
    name: "Y-Mountain Bike Shoes",
    priceTit: "Price:",
    price$: "$500",
    iconshopping: <AiOutlineShoppingCart />,
    iconlike: <AiOutlineHeart />,
    iconeye: <AiFillEye />,
  },
];
export default newData;
