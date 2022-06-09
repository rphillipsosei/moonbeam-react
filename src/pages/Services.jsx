import React from "react";
import styled from "styled-components";
import shipping from "../assets/shipping.webp";
import ecommerce from "../assets/ecommerce.webp";
import technology from "../assets/programmer.webp";
import farmer from "../assets/farmer.webp";
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
                  <Image alt="" src={technology}></Image>
              <b>TECHNOLOGY</b>
              <br></br>
              <br></br>
              We work collaboratively to alleviate societal issues by providing
              technology services and consultation to businesses in a variety of
              sectors. These include: software engineering, Software As A
              Service (SaaS), predictive analytics, machine learning/artificial
              intelligence, and more.
            </HexContainer>
         
            <HexContainer>
                  <Image alt="" src={farmer}></Image>
              <b>AGRIFOODS</b>
              <br></br>
              <br></br>
              Climate change and food insecurity are just a few of the
              challenges we face today, which can be addressed in part through
              the use of advanced agricultural technology. Our team of
              specialists grow our branded product, and assist farmers to
              realize greater annual yields and improved profits.
            </HexContainer>
        
            <HexContainer>
                  <Image alt="" src={shipping}></Image>
              <b>IMPORTS & EXPORTS</b>
              <br></br>
              <br></br>
              Through distributorships, knowledge exchange, or the introduction
              of new freight technologies, we are expanding our services to
              focus on creating mutually beneficial commercial success. Our team
              sources products from around the world to meet the demands of our
              Canadian customers.
            </HexContainer>
       
            <HexContainer>
                  <Image alt="" src={ecommerce}></Image>
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
    </ServicesContainer>
  );
}

const Image = styled.img`
  // height: 300px;
  width: 100%;
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
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  font-family: "Comfortaa", sans-serif;
  flex-direction: column;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  @media (max-width: 1650px) {
    width: 300px;
  }
  @media (max-width: 1320px) {
    font-size: 15px;
    // width: 320px;

  }
`;

const Hexes = styled.div`
  height: 570px;
  width: 1700px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
   border: 3px solid blue;

   @media (max-width: 1650px) {
    width: 1500px;
    // justify-content: space-between;
  }
  @media (max-width: 1590px) {
    max-width: 1350px;
    flex-wrap: wrap;
  }
`;




