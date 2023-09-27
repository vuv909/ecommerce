import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import styled from "styled-components";
import Product from "../components/Product";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
const HeaderElement = styled.div`
  position: fixed;
  width: 100%;
  z-index: 20;
  height: 100px;
  background-color: white;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
`


const Home = () => {
  return (
    <div className="container">
      <HeaderElement>
        <Announcement />
        <Navbar />
      </HeaderElement>
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
