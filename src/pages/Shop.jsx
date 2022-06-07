import React from "react";
import styled from "styled-components";
import onlineshopping from "../assets/online-shopping.webp";
import auction from "../assets/auction2.png";
import shopify from "../assets/shopify.png";

export default function Shop() {
  return (
    <ShopContainer>
      <ShopContent>
        <ShopTitle>Shop</ShopTitle>
        <ShopBox>
          <Image src={onlineshopping} />
          <ShopOptions>
            <ShopifyRow>
              <ShopifyIcon src={shopify} />
              <p>
                <h3>SHOPIFY</h3>
                <i>
                  Browse a collection of fair trade, sustainable items from our
                  partners.
                </i>
              <Button>SHOP NOW</Button>
              </p>
            </ShopifyRow>
            <AuctionRow>
            <AuctionIcon src={auction} />
            <p>
                <h3>AUCTION</h3>
                <i>
                Coming soon! Stay tuned for more details. <br></br><br></br>
                </i>
              <DisabledButton>SHOP NOW</DisabledButton>
              </p>
            </AuctionRow>
          </ShopOptions>
        </ShopBox>
      </ShopContent>
    </ShopContainer>
  );
}

const Image = styled.img`
  height: 400px;
  //   margin-left: -2.5r.em;
  margin-right: 2rem;
`;

const ShopContainer = styled.div`
//   border: 3px solid red;
  // padding: 0.5rem;
  height: 84.5vh;
  width: 100%;
  margin-top: 1rem;
  //  margin: 0;
  margin-bottom: 20rem;
`;

const ShopContent = styled.div`
//   border: 3px solid yellow;
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
//   border: 3px solid green;
  margin-top: 5rem;
  font-size: 70px;
  text-align: center;
  h3 {
    font-size: 20px;
    font-weight: normal;
    font-style: italic;
  }
`;

const ShopBox = styled.div`
  height: 500px;
  width: 1500px;
//   border: 3px solid turquoise;
  margin-top: 5rem;
  display: flex;
  // flex-wrap: wrap;
  // margin-top: 2rem;
  align-items: center;
  justify-content: center;
`;

const ShopOptions = styled.div`
  width: 600px;
  height: 400px;
//   border: 3px solid orange;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ShopifyRow = styled.div`
  height: 180px;
  width: 400px;
//   border: 3px solid green;
  // margin-right: 1rem;
  display: flex;
//   align-items: center;
  // flex-direction: column
`;
const ShopifyIcon = styled.img`
  height: 150px;
  // width: 100%;
  margin-left: 1rem;
  margin-top: 0.4rem;
`

const AuctionIcon = styled.img`
  height: 100px;
  // width: 100%;
  margin-left: 2.5rem;
  margin-right: 1.7rem;
  margin-top: 0.4rem;


`;

const AuctionRow = styled.div`
height: 180px;
width: 400px;
//   border: 3px solid green;
// margin-right: 1rem;
display: flex;
//   align-items: center;
// flex-direction: column
  `;

  const Button = styled.button`
	box-shadow:inset 0px 1px 0px 0px #a4e271;
	background:linear-gradient(to bottom, #89c403 5%, #77a809 100%);
	background-color:#89c403;
	border-radius:6px;
	border:1px solid #74b807;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #528009;
    margin-top: 0.5rem;

    &:hover {
        background:linear-gradient(to bottom, #77a809 5%, #89c403 100%);
        background-color:#77a809;
      }
    &:active {
        position:relative;
        top:1px;
`

const DisabledButton = styled.button`
	// box-shadow:inset 0px 1px 0px 0px #a4e271;
	// background:linear-gradient(to bottom, #89c403 5%, #77a809 100%);
	background-color: grey;
	border-radius:6px;
	border:1px solid #74b807;
	display:inline-block;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #528009;
    margin-top: 0.5rem;
    `