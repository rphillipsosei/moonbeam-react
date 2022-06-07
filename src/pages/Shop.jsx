import React from "react";
import styled from "styled-components";

export default function Shop() {
  return (
    <ShopContainer id="shop">
      <ShopContent id="shop">
        <ShopTitle>Shop</ShopTitle>

      </ShopContent>
    </ShopContainer>
  );
}

const Image = styled.img`
  height: 300px;
  width: 400px;
  margin-left: -2.5rem;
`;

const ShopContainer = styled.div`
  border: 3px solid red;
  // padding: 0.5rem;
  height: 84.5vh;
  width: 100%;
  margin-top: 1rem;
  //  margin: 0;
  margin-bottom: 20rem;
`;

const ShopContent = styled.div`
  border: 3px solid yellow;
  // margin: 2rem 0;
  height: 100%;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 2rem;
  font-family: "Comfortaa", sans-serif;
  background-color: rgba(12, 121, 190, 255);
  background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
  color: #ffff;
  flex-direction: column;
`;

const ShopTitle = styled.div`

border: 3px solid green;
  margin-top: 5rem;
  font-size: 70px;
  text-align: center;
  h3 {
    font-size: 20px;
    font-weight: normal;
    font-style: italic;
  }
`;


