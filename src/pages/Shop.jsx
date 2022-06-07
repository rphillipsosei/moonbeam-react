import React from "react";
import styled from "styled-components";
import onlineshopping from "../assets/shopping-cart.jpg";
import auction from "../assets/auction2.png";
import shopify from "../assets/shopify.png";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
export default function Shop() {
  return (
    <ShopContainer>
      <div>
        <Helmet>
          <title>Moonbeam Trading Co. | Shop</title>
        </Helmet>
      </div>
      <ShopContent>
        <ShopTitle>
          SHOP
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
                <h3>
                  <b>SHOPIFY</b>
                </h3>
                <i>Discover a wide variety of products</i>
                <br></br>
                <br></br>
                <a href="https://moonbeam-trading-company.myshopify.com/">
                  <Button variant="success">SHOP NOW</Button>
                </a>
              </p>
            </ShopifyRow>
            <br></br>
            <AuctionRow>
              <AuctionIcon src={auction} />
              <p>
                <h3>
                  <b>AUCTION (COMING SOON)</b>
                </h3>
                <i>
                  Stay tuned for more details. <br></br>
                  <br></br>
                </i>
                <Button disabled variant="success">
                  BID NOW
                </Button>
              </p>
            </AuctionRow>
          </ShopOptions>
        </ShopBox>
      </ShopContent>
    </ShopContainer>
  );
}

const Image = styled.img`
  height: 350px;
  //   margin-left: -2.5rem;
  margin-right: 5rem;
  border-radius: 15px;
  // border: 3px solid rgba(12, 121, 190, 255);
`;

const ShopContainer = styled.div`
  // border: 3px solid red;
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
  background-size: cover;
  color: #000000;
  flex-direction: column;
`;

const ShopTitle = styled.div`
  // background-color: rgba(37, 36, 37, 0.6);
  // border: 3px solid rgba(12, 121, 190, 255);
  margin-top: 2rem;
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
  margin-top: 5rem;
  align-items: center;
  justify-content: center;
`;

const ShopOptions = styled.div`
  width: 500px;
  height: 400px;
  // background-color: rgba(37, 36, 37, 0.6);
  // border: 3px solid rgba(12, 121, 190, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ShopifyRow = styled.div`
  height: 180px;
  width: 600px;
  // border: 3px solid green;
  margin-top: 3rem;
  display: flex;
  //   align-items: center;
  // flex-direction: column
  font-size: 16px;
`;
const ShopifyIcon = styled.img`
  height: 120px;
  // width: 100%;
  margin-left: 3.5rem;
  margin-right: 1.5rem;
  margin-top: 1rem;
`;

const AuctionIcon = styled.img`
  height: 70px;
  // width: 100%;
  margin-left: 7rem;
  margin-right: 3rem;
  margin-top: 1.8rem;
`;

const AuctionRow = styled.div`
  height: 180px;
  width: 600px;
  // border: 3px solid green;
  // margin-right: 1rem;
  display: flex;
  //   align-items: center;
  // flex-direction: column
  font-size: 16px;
`;
