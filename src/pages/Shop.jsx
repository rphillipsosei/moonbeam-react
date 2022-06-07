import React from "react";
import styled from "styled-components";
import onlineshopping from "../assets/online-shopping.webp";
import auction from "../assets/auction2.png";
import shopify from "../assets/shopify.png";
import background from "../assets/image.webp"
export default function Shop() {
  return (
    <ShopContainer>
      <ShopContent>
        <ShopTitle>SHOP
          <h3>
          Browse a collection of fair trade, sustainable items from our
                  partners.
          </h3>
        </ShopTitle>
        <ShopBox>
          <Image src={onlineshopping} />
          <ShopOptions>
            <ShopifyRow>
              <ShopifyIcon src={shopify} />
              <p>
                <h3>SHOPIFY</h3>
                <i>
                Discover a wide variety of products
                 
                </i><br></br><br></br>
                <a href="https://moonbeam-trading-company.myshopify.com/">
              <Button>SHOP NOW</Button>
              </a>
              </p>
            </ShopifyRow>
            <br></br>
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
  //   margin-left: -2.5rem;
  margin-right: 5rem;
  border: 3px solid rgba(12, 121, 190, 255);
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
  // background-color: rgba(12, 121, 190, 255);
  // background-image: url(${background});
  background-size: cover;
  color: #000000;
  flex-direction: column;
`;

const ShopTitle = styled.div`
// background-color: rgba(37, 36, 37, 0.6);
  // border: 3px solid rgba(12, 121, 190, 255);
  margin-top: 5rem;
  width: 800px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  // margin-bottom: 1rem;
  font-size: 50px;
  text-align: center;
 display: flex;
 flex-direction: column;
//  justify-content: center;
//  align-items: center;
padding-top: 0.8rem;
  h3 {
    // margin-top: -0.1rem;
    font-size: 17px;
    font-weight: normal;
    font-style: italic;
  }
`;

const ShopBox = styled.div`
  height: 500px;
  width: 1300px;
  // background-color: rgba(37, 36, 37, 0.3);
  margin-top: 3rem;
  display: flex;
  // flex-wrap: wrap;
  // margin-top: 2rem;
  align-items: center;
  justify-content: center;
  
`;

const ShopOptions = styled.div`
  width: 400px;
  height: 400px;
  // background-color: rgba(37, 36, 37, 0.6);
  border: 3px solid rgba(12, 121, 190, 255);
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
  height: 120px;
  // width: 100%;
  margin-left: 1rem;
  margin-top: 1rem;
`

const AuctionIcon = styled.img`
  height: 70px;
  // width: 100%;
  margin-left: 2.5rem;
  margin-right: 1.7rem;
  margin-top: 1.8rem;


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
	// background:linear-gradient(to bottom, #000000 5%, #77a809 100%);
	background-color: grey;
	border-radius:6px;
	border:1px solid grey;
	display:inline-block;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	// text-shadow:0px 1px 0px #000000;
    margin-top: 0.5rem;
    `