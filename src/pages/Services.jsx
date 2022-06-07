import React from "react";
import styled from "styled-components";
import shipping from "../assets/shipping.jpg";
import ecommerce from "../assets/ecommerce.jpg";
import technology from "../assets/programmer.jpg";
import farmer from "../assets/farmer.jpg";
import {Helmet} from 'react-helmet'
export default function Services() {
  return (
 
    <ServicesContainer id="services">
      
         <div>
    <Helmet>
      <title>Moonbeam Trading Co. | Services</title>
    </Helmet>
    </div>
    
      <ServicesContent id="services">
        <ServicesTitle>
          SERVICES
          <h3>
            We are a team of experts in numerous trades of business, ready to
            reach new frontiers.
          </h3>
        </ServicesTitle>
        <ServicesBox>
          <Hexes>
            <HexContainer>
                {/* <Hex>
                  <HexBG> */}
                  <Image alt="" src={technology}></Image>
                {/* </HexBG>
              </Hex> */}
              <b>TECHNOLOGY</b>
              <br></br>
              <br></br>
              We work collaboratively to alleviate societal issues by providing
              technology services and consultation to businesses in a variety of
              sectors. These include: software engineering, Software As A
              Service (SaaS), predictive analytics, machine learning/artificial
              intelligence, and more.
            </HexContainer>
            <Connector />
            <HexContainer>
              {/* <Hex>
                <HexBG> */}
                  <Image alt="" src={farmer}></Image>
                {/* </HexBG>
              </Hex> */}
              <b>AGRIFOODS</b>
              <br></br>
              <br></br>
              Climate change and food insecurity are just a few of the
              challenges we face today, which can be addressed in part through
              the use of advanced agricultural technology. Our team of
              specialists grow our branded product, and assist farmers to
              realize greater annual yields and improved profits.
            </HexContainer>
            <Connector />
            <HexContainer>
              {/* <Hex>
                <HexBG> */}
                  <Image alt="" src={shipping}></Image>
                  {/* </HexBG>
                </Hex> */}
              <b>IMPORTS & EXPORTS</b>
              <br></br>
              <br></br>
              Through distributorships, knowledge exchange, or the introduction
              of new freight technologies, we are expanding our services to
              focus on creating mutually beneficial commercial success. Our team
              sources products from around the world to meet the demands of our
              Canadian customers.
            </HexContainer>
            <Connector />
            <HexContainer>
              {/* <Hex>
                <HexBG> */}
                  <Image alt="" src={ecommerce}></Image>
                {/* </HexBG>
              </Hex> */}
              <b>E-COMMERCE</b>
              <br></br>
              <br></br>
              We have a goal of offering our customers positive online shopping
              experiences. Our sales and digital marketing team working
              alongside our partners in e-commerce and drop shipping, enhance
              your shopping experience while growing our international
              -ecommerce expansion.
            </HexContainer>
          </Hexes>
        </ServicesBox>
      </ServicesContent>
      //{" "}
    </ServicesContainer>
  );
}

const Image = styled.img`
  height: 300px;
  width: 400px;
  // margin-left: -2.5rem;
  margin-bottom: 0.5rem;
  border-radius: 15px;
`;

const ServicesContainer = styled.div`
  // border: 3px solid red;
  // padding: 0.5rem;
  height: 84.5vh;
  width: 100%;
  margin-top: 1rem;
  //  margin: 0;
  margin-bottom: 20rem;
`;

const ServicesContent = styled.div`
  // border: 3px solid yellow;
  // margin: 2rem 0;
  height: 100%;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  // padding-top: 2rem;
  font-family: "Comfortaa", sans-serif;
  background-color: white;

  color: #000000;
  flex-direction: column;
`;

const ServicesTitle = styled.div`
  // background-color: rgba(37, 36, 37, 0.6);
  // border: 3px solid rgba(12, 121, 190, 255);
  margin-top: 5rem;
  width: 800px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
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

const ServicesBox = styled.div`
  // border: 2px solid green;
  // background-color: rgba(37, 36, 37, 0.3);
  height: 550px;
  width: 1700px;
  display: flex;
  flex-wrap: wrap;
  // margin-top: 2rem;
  align-items: center;
  justify-content: space-around;
`;

const HexContainer = styled.div`
  width: 350px;
  padding: 0 0.5rem;
  height: 500px;
  // border: 3px solid white;
  // background-color: rgba(37, 36, 37, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  font-family: "Comfortaa", sans-serif;
  flex-direction: column;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  //   &filter: blur(0px);
  // -webkit-filter: blur(0px);
`;

const Hexes = styled.div`
  // border-radius: 10px;
  // background-color: rgba(37, 36, 37, 0.8);
  height: 570px;
  width: 1700px;
  display: flex;
  flex-wrap: wrap;
  // margin-top: 2rem;
  align-items: center;
  justify-content: space-around;
`;
// const Hex = styled.div`
//   display: block;
//   margin: 0 auto;
//   position: relative;
//   width: 320px;
//   height: 277.12px; /* width * 0.866 */
//   background: rgba(12, 121, 190, 255);
//   box-sizing: border-box;
//   margin-bottom: 1rem;
//   -webkit-clip-path: polygon(
//     0% 50%,
//     25% 0%,
//     75% 0%,
//     100% 50%,
//     75% 100%,
//     25% 100%
//   );
//   -moz-clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%);
// `;

// const HexBG = styled.div`
//   position: absolute;
//   background-color: white; /*color of the main-background*/
//   top: 2px; /* equal to border thickness */
//   left: 2px; /* equal to border thickness */
//   width: 316px; /* container height - (border thickness * 2) */
//   height: 273.12px; /* container height - (border thickness * 2) */
//   -webkit-clip-path: polygon(
//     0% 50%,
//     25% 0%,
//     75% 0%,
//     100% 50%,
//     75% 100%,
//     25% 100%
//   );
//   -moz-clip-path: polygon(0% 50%, 25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%);
// `;

const Connector = styled.div`
  width: 50px;
  border: 2px solid #ffff;
  margin-top: -12.5rem;
`;

// const ServicesContainer = styled.div`
//   // border: 3px solid red;
//   padding: 0.5rem;
//   height: 111vh;
//   width: 100%;
// `;
