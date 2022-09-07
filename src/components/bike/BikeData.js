import bike from "./bike.png";
import { AiFillEye } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

const BikeData = [
  {
    id: 1,
    image: bike,
    name: "New Yellow Biframes",
    priceTit: "Price:",
    price$: "$625",
    iconAddTo: <AiOutlineShoppingCart />,
    iconWatching: <AiFillEye />,
  },
  {
    id: 2,
    image: bike,
    name: "Ninner Air 9 RDO",
    priceTit: "Price:",
    price$: "$553",
    iconAddTo: <AiOutlineShoppingCart />,
    iconWatching: <AiFillEye />,
  },
  {
    id: 3,
    image: bike,
    name: "Carbon Niner Air 9",
    priceTit: "Price:",
    price$: "$489",
    iconAddTo: <AiOutlineShoppingCart />,
    iconWatching: <AiFillEye />,
  },
  {
    id: 4,
    image: bike,
    name: "SK Charge Bikes CJ",
    priceTit: "Price:",
    price$: "$699",
    iconAddTo: <AiOutlineShoppingCart />,
    iconWatching: <AiFillEye />,
  },
];
export default BikeData;
