import styled from '@emotion/styled';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import {mobile} from '../responsive'
const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content:  center;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 50px;
  ${mobile({ textAlign:"center" })}
`
const InputContainer = styled.div`
  width: 35%;
  height: 8%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width:"80%" })}
`
const Inputelement = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`
const Buttonelement = styled.button`
  cursor: pointer;
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  &:hover{
    background-color:   rgb(68, 187, 187);
  }
`

function Newsletter() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
    return (
        <Container data-aos="fade-up">
            <Title>Newsletter</Title>
            <Description>React.js eCommerce app UI design full course. React shopping app UI project for beginners. React eCommerce website design from scratch.</Description>
            <InputContainer>
                <Inputelement placeholder='Your email' />
                <Buttonelement>
                    <SendOutlinedIcon />
                </Buttonelement>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
