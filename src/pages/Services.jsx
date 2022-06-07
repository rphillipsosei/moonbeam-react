import React from "react";
import styled from "styled-components";
import shipping from "../assets/shipping.jpg"
import ecommerce from "../assets/ecommerce.jpg"
import technology from "../assets/programmer.jpg"
import farmer from "../assets/farmer.jpg"

export default function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesContent id="services">
        <ServicesTitle>Services</ServicesTitle>

        <ServicesBox>
          <HexContainer>
            <Hex>
              <HexBG>
                <Image alt="" src={technology} ></Image>
              </HexBG>
            </Hex>
            TECHNOLOGY<br></br>
            <br></br>
            We work collaboratively to alleviate societal issues by providing
            technology services and consultation to businesses in a variety of
            sectors. These include: software engineering, Software As A Service
            (SaaS), predictive analytics, machine learning/artificial
            intelligence.
          </HexContainer>
          <Connector />
          <HexContainer>
            <Hex>
              <HexBG>
                <Image alt="" src={farmer}></Image>
              </HexBG>
            </Hex>
            AGRIFOODS<br></br>
            <br></br>
            Climate change and food insecurity are just a few of the challenges
            we face today, which can be addressed in part through the use of
            advanced agricultural technology. Our team of specialists grow our
            branded product, and assist farmers to realize greater annual yields
            and improved profits.
          </HexContainer>
          <Connector />
          <HexContainer>
            <Hex>
              <HexBG>
                <Image alt="" src={shipping} ></Image>
              </HexBG>
            </Hex>
            IMPORTS & EXPORTS<br></br>
            <br></br>
            Through distributorships, knowledge exchange, or the introduction of
            new freight technologies, we are expanding our services to focus on
            creating mutually beneficial commercial success. Our team sources
            products from around the world to meet the demands of our Canadian
            customers.
          </HexContainer>
          <Connector />
          <HexContainer>
            <Hex>
              <HexBG>
                <Image alt="" src={ecommerce} ></Image>
              </HexBG>
            </Hex>
            E-COMMERCE<br></br>
            <br></br>
            We have a goal of offering our customers positive online shopping
            experiences. Our sales and digital marketing team working alongside
            our partners in e-commerce and drop shipping, enhance your shopping
            experience while growing our international -ecommerce expansion.
          </HexContainer>
        </ServicesBox>
      </ServicesContent>
    // </ServicesContainer>
  );
}

const Image = styled.img  `
  height: 300px;
  width: 400px;
 margin-left: -2.5rem;


`

const ServicesContainer = styled.div`
border: 3px solid red;
// padding: 0.5rem;
height: 84.5vh;
width: 100%;
margin-top: 1rem;
//  margin: 0;
margin-bottom: 20rem;
`

const ServicesContent = styled.div`
  // border: 3px solid yellow;
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

const ServicesTitle = styled.div`
  margin-top: 5rem;
  font-size: 70px;
  text-align: center;
  h3 {
    font-size: 20px;
    font-weight: normal;
    font-style: italic;
  }
`;

const ServicesBox = styled.div`
  // border: 3px solid pink;
  height: 400px;
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  // margin-top: 2rem;
  align-items: center;
  justify-content: space-between;
`;

const HexContainer = styled.div`

  width: 322px;
  height: 650px;
  // border: 3px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffff;
  font-family: "Comfortaa", sans-serif;
  flex-direction: column;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
`;

const Hex = styled.div`

  display: block;
  margin: 0 auto;
  position: relative;
  width: 320px;
  height: 277.12px; /* width * 0.866 */
  background: white;
  box-sizing: border-box;
  margin-bottom: 1rem;
  -webkit-clip-path: polygon(
    0% 50%,
    25% 0%,
    75% 0%,
    100% 50%,
    75% 100%,
    25% 100%
  );
  -moz-clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%);
`;

const HexBG = styled.div`

  position: absolute;
  background-color: white; /*color of the main-background*/
  top: 2px; /* equal to border thickness */
  left: 2px; /* equal to border thickness */
  width: 316px; /* container height - (border thickness * 2) */
  height: 273.12px; /* container height - (border thickness * 2) */
  -webkit-clip-path: polygon(
    0% 50%,
    25% 0%,
    75% 0%,
    100% 50%,
    75% 100%,
    25% 100%
  );
  -moz-clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%);
`;

const Connector = styled.div`
  width: 50px;
  border: 2px solid rgba(12, 121, 190, 255);
  margin-top: -12.5rem;
`;




// const ServicesContainer = styled.div`
//   // border: 3px solid red;
//   padding: 0.5rem;
//   height: 111vh;
//   width: 100%;
// `;

