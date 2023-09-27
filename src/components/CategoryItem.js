import { Button } from "@mui/material";
import styled from "styled-components";
import Aos from "aos";
import { mobile } from "../responsive";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Container = styled.div`
  flex: 1;

  margin: 3px;
  height: 70vh;
  position: relative;
  &:hover {
    transition: all 1.5s ease;
    transform: scale(1.3);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  ${mobile({ height: "30vh", width: "100v2" })}
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: darksalmon;
  margin-bottom: 20px;
`;
const Buttonnew = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  background-color: white;
  color: grey;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container data-aos="fade-up">
      <Image src={require(`../asset/${item.img}`)} />
      <Info>
        <Title>{item.title}</Title>
        <Buttonnew>SHOP NOW</Buttonnew>
      </Info>
    </Container>
  );
};

export default CategoryItem;
