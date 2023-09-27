import logo from "./logo.svg";

import Home from "./homepages/Home";
import Navbar from "./components/Navbar";
import ProductList from "./homepages/ProductList";
import Product from "./homepages/Product";
import Register from "./homepages/Register";
import Login from "./homepages/Login";
import Cart from "./homepages/Cart";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import RiseLoader from "react-spinners/RiseLoader";
import styled from "styled-components";

const Container = styled.div`
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
`

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Container>
        <RiseLoader
          color={"hsla(305, 66%, 69%, 1)"}
          size={30}
          loading={loading}
        />
        </Container>
      ) : (
        <Cart />
      )}
    </div>
  );
}

export default App;
