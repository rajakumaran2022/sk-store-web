import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderTop from "./components/HeaderTop/Headertop";
// import Slider from "./components/HeaderBanner/slider.jsx";
// import sliderData from "./components/HeaderBanner/SliderData";
import HeaderBanner from "./components/HeaderBanner/HeaderBanner.jsx";
import StickyNavbar from "./components/StickyNavbar/StickyNavbar.jsx";
import Section from "./components/section/Section";
import FeaturedProduct from "./components/featured/FeaturedProducts.jsx";
import Products from "./components/product/Products.jsx";
import productData from "./components/product/productData";
import Button from "./components/button/Button.jsx";
import Sale from "./components/Sale/Sale.jsx";
import PopularProduct from "./components/Popular/PopularProduct.jsx";
import Bike from "./components/bike/Bike.jsx";
import BikeData from "./components/bike/BikeData";
import Promotion from "./components/promotion/Promotion.jsx";
import Special from "./components/special/Special.jsx";
import New from "./components/new/New.jsx";
import newData from "./components/new/newData";
import NewFull from "./components/newfull/NewFull.jsx";
import Latest from "./components/latest/Latest.jsx";
import Blogs from "./components/blogs/Blogs.jsx";
import Store from "./components/store/Store.jsx";
import "./components/store/Store.css";
import Logo from "./components/logo/Logo.jsx";
import Hr from "./components/Hr/Hr.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FooterNav from "./components/FooterNav/FooterNav.jsx";

function App() {
  return (
    <div className="body">
      
      <HeaderTop />
      <HeaderBanner />
      <StickyNavbar />
      <Section />
      <FeaturedProduct />
      <div className="grid">
        {productData.map((list) => (
          <Products list={list} />
        ))}
      </div>
      <Button />
      <Sale />
      <PopularProduct />
      <div className="grid container">
        {BikeData.map((list) => (
          <Bike list={list} />
        ))}
      </div>
      <Promotion />
      <Special />
      <div id="new" className="row m-0">
        <div className="col">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            {newData.map((list) => (
              <New list={list} />
            ))}
          </div>
        </div>
        <div className="col">
          <NewFull />
        </div>
      </div>
      <Latest />
      <Blogs />
      <div id="store" style={{ backgroundColor: "#f4f4f4" }}>
        <Store />
        <Button />
      </div>
      <Logo />
      <Hr />
      <Footer />
      <FooterNav />
    </div>
  );
}
export default App;
