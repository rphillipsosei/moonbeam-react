import React from "react";
import styled from "styled-components";
import onlineshopping from "../assets/shopping-cart.jpg";
import auction from "../assets/auction2.png";
import shopify from "../assets/shopify.png";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
export default function Shop() {
  return (
    <ShopContent>
      <div>
        <Helmet>
          <title>Moonbeam Trading Co. | Shop</title>
        </Helmet>
      </div>

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
                <Button variant="success">Shop now</Button>
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
                Bid now
              </Button>
            </p>
          </AuctionRow>
        </ShopOptions>
      </ShopBox>
    </ShopContent>
  );
}

const Image = styled.img`
  height: 350px;
  margin-right: 5rem;
  border-radius: 15px;

  @media (max-width: 1180px) {
    height: 290px;
    margin-right: 0;
  }
  @media (max-width: 550px) {
    height: 250px;
  }
  @media (max-width: 430px) {
    height: 180px;
    margin-top: -3rem;
  }
`;

const ShopContent = styled.div`
  height: 90vh;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  font-family: "Comfortaa", sans-serif;
  background-size: cover;
  color: #000000;
  flex-direction: column;
`;

const ShopTitle = styled.div`
  margin-top: 2rem;
  width: 800px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: 0.8rem;
  @media (max-width: 480px) {
    width: 100%;
  }
  h3 {
    font-weight: normal;
    font-style: italic;
    @media (max-width: 1180px) {
      margin-top: -1rem;
    }

    @media (max-width: 900px) {

      width: 500px;
      font-size: 20px;
    }

    @media (max-width: 550px) {
      font-size: 22px;
      width: 400px;
      font-size: 16.5px;
    }
    @media (max-width: 430px) {
      font-size: 18px;
      width: 100%;
      font-size: 16.5px;
    }
  }
`;

const ShopBox = styled.div`
  height: 500px;
  width: 1300px;
  display: flex;
  margin-top: 5rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 1180px) {
    flex-direction: column;
  }
 
`;

const ShopOptions = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1180px) {
    height: 290px;
  }
  @media (max-width: 550px) {
    width: 500px;
  }
  @media (max-width: 430px) {
    width: 430px;
  }
`;
const ShopifyRow = styled.div`
  height: 180px;
  width: 100%;
  margin-top: 3rem;
  display: flex;
  font-size: 16px;
  @media (max-width: 430px) {
    font-size: 13px;
  }

  h3 {
    @media (max-width: 900px) {
      font-size: 22px;
    }
    @media (max-width: 550px) {
      font-size: 18px;
    }
    @media (max-width: 430px) {
      font-size: 16px;
    }
  }
`;
const ShopifyIcon = styled.img`
  height: 120px;
  margin-left: 3.5rem;
  margin-right: 1.5rem;
  margin-top: 1rem;
  @media (max-width: 1180px) {
    height: 90px;
    margin-left: 4.5rem;
  }
  @media (max-width: 430px) {
    height: 60px;
    margin-right: 1rem;
  }
`;

const AuctionIcon = styled.img`
  height: 70px;
  margin-left: 7rem;
  margin-right: 3rem;
  margin-top: 1.8rem;
  @media (max-width: 1180px) {
    height: 50px;
  }
  @media (max-width: 430px) {
    height: 30px;
    margin-right: 1.5rem;
    @media (max-width: 430px) {
      margin-top: -0.5rem;
    }
  }
`;

const AuctionRow = styled.div`
  height: 180px;
  width: 100%;
  display: flex;
  font-size: 16px;
  @media (max-width: 430px) {
    font-size: 13px;
    width: 100%;
  }
  h3 {
    @media (max-width: 900px) {
      font-size: 22px;
    }
    @media (max-width: 550px) {
      font-size: 18px;
    }
    @media (max-width: 430px) {
      margin-top: -0.3rem;
      font-size: 16px;
    }
  }
`;
