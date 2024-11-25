import React, { useState } from 'react';
import styled from 'styled-components';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Cyber Truck</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <i onClick={() => setBurgerStatus(true)} class="fa-solid fa-bars"></i>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <i onClick={() => setBurgerStatus(false)} class="fa-solid fa-xmark"></i>
        </CloseWrapper>
        <li><a href="#">Model S</a></li>
        <li><a href="#">Model X</a></li>
        <li><a href="#">MOdel 3</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Model Y</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Roadaster</a></li>
        <li><a href="#">Solar Roof</a></li>
        <li><a href="#">Solar Pannels</a></li>
        <li><a href="#">Energy Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
      </BurgerNav>
    </Container>
  )
}
export default Header

const Container = styled.div`
min-height: 65px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
top: 0;
left: 0;
right: 0;
z-inde: 1;
`
const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
a {
 font-weight: 600;
 text-transform: uppercase;
 padding: 0 10px;
 flex-wrap: nowrap;
}

@media (max-width: 765px) {
display: none;
}
`
const RightMenu = styled.div`
display: flex;
align-item: center;

a {
 font-weight: 600;
 text-transform: uppercase;
 padding: 0 10px;
 flex-wrap: nowrap;
}
 i {
  font-size: 500;
}
`

const BurgerNav = styled.div`
 position: fixed;
 top: 0;
 bottom: 0;
 right: 0;
 background-color: white;
 width: 300px;
 z-index: 16;
 list-style: none;
 padding: 20px;
 display: flex;
 flex-direction: column;
 text-align: start;
 transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
 transition: transform 0.2s;
 li {
 padding: 15px 0;
 border-bottom: 1px solid rgba(0, 0, 0, .2);
 a {
 font-weight: 600;
 }
 }
 `

const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
cursor: pointer;
font-size: 25px;
`