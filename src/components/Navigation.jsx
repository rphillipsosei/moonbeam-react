import { useState } from "react";
import styled from "styled-components";
import React from "react";
import logo from "../assets/moonbeam-logo.jpg"
import { NavLink } from "react-router-dom";

export default function Navigation() {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <Nav>
      <NavLink to="/">

      </NavLink>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
      
      <NavLink to="/services" activeClassName="current" exact>
        <MenuLinks onClick={() => setIsOpen(!isOpen)}>SERVICES</MenuLinks>
      </NavLink>
      <NavLink to="/shop" activeClassName="current" exact>
        <MenuLinks onClick={() => setIsOpen(!isOpen)}>SHOP</MenuLinks>
      </NavLink>
      <NavLink to="/careers" activeClassName="current" exact>
        <MenuLinks onClick={() => setIsOpen(!isOpen)}>CAREERS</MenuLinks>
      </NavLink>
      <NavLink to="/about" activeClassName="current" exact>
        <MenuLinks onClick={() => setIsOpen(!isOpen)}>ABOUT</MenuLinks>
      </NavLink>
      <NavLink to="/contact" activeClassName="current" exact>
        <MenuLinks onClick={() => setIsOpen(!isOpen)}>CONTACT</MenuLinks>
      </NavLink>
      </Menu>
    </Nav>
  );
}


const Nav = styled.div`

    color: #000000;
    height: 100px;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    padding-right: 4rem;
  `;




  
  const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: rgba(12,121,190,255);
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
    margin-right: 2rem;
  }
`;

  const Menu = styled.div`
  margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  
    @media (max-width: 768px) {
      overflow: hidden;
      flex-direction: column;
      max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
      transition: max-height 0.3s ease-in;
      width: 100%;
      border: 2px solid rgba(12,121,190,255);
      background-color: #ffff;
    }
    `;

  const MenuLinks = styled.li`
  font-family: "Expletus Sans", sans-serif;
  font-size: 16px;
  font-weight: bold;
  padding: 1rem; 2rem;
  cursor: pointer;
  text-align: center;
  color: #000000;
transition: all 0.3s ease-in;
list-style: none;
&:hover {
  color: #000000;
  text-decoration: none;


}


  `;