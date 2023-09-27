import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge, { BadgeProps } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {mobile} from '../responsive'
const Container = styled.div`
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  z-index: 10;
  ${mobile({padding:"10px 0px"})}
 
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
`;

const Logo = styled.div`
  font-weight: bold;
  ${mobile({fontSize:"24px"})}
`;

const Input = styled.input`
  border: none;
  ${mobile({width:"50px"})}
`;
const Language = styled.span`
  font: 14px;
  cursor: pointer;
  ${mobile({display:"none"})}
`;

const Center = styled.div`
  text-align: center;
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({justifyContent:"center"})}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({flex : 2,fontSize:"12px"})}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" /> <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign in</MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
