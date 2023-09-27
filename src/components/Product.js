import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { mobile } from "../responsive";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center ;
 transition : all 1s ease ;

 
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;
const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: black;
position:absolute;
`;
const Imageproduct = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover{
    background-color: #e9f5f5;
    transform: scale(1.2);
  }
`;
function Product({ item }) {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <Container data-aos="fade-up">
      <Circle />
      <Imageproduct src={require(`../asset/${item.img}`)} />

      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <SearchOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
}

export default Product;
