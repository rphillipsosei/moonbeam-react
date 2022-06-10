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
              e-commerce expansion.
            </HexContainer>
          </Hexes>
        </ServicesBox>
      </ServicesContent>
    </ServicesContainer>
  );
}

const Image = styled.img`
  width: 100%;
  margin-bottom: 0.5rem;
  border-radius: 15px;
  @media (max-width: 1330px) {
  width: 90%;
  }
`;

const ServicesContainer = styled.div`
  height: 84.5vh;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 20rem;
`;

const ServicesContent = styled.div`
  height: 100%;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  font-family: "Comfortaa", sans-serif;
  background-color: white;

  color: #000000;
  flex-direction: column;
`;

const ServicesTitle = styled.div`
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
padding-top: 0.8rem;
  h3 {
    font-size: 17px;
    font-weight: normal;
    font-style: italic;

    @media (max-width: 780px) {
width: 500px;
    }
  
    @media (max-width: 440px) {
      width: 320px;
      font-size: 16.5px;
          }
  }
`;

const ServicesBox = styled.div`
  height: 550px;
  width: 1700px;
  display: flex;
  flex-wrap: wrap;
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
`;

const Hexes = styled.div`
  height: 570px;
  width: 1700px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

   @media (max-width: 1650px) {
    width: 90%;
  }
  @media (max-width: 1550px) {
    width: 700px;
    flex-wrap: wrap;
  }
 
  @media (max-width: 630px) {
    width: 300px;
    flex-wrap: wrap;
  }
`;




