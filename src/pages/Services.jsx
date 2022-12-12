import React from "react";
import styled from "styled-components";
import shipping from "../assets/shipping.webp";
import ecommerce from "../assets/ecommerce.webp";
import technology from "../assets/programmer.webp";
import farmer from "../assets/farmer.webp";
import { Helmet } from "react-helmet";
import {motion } from "framer-motion";
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import { NavLink } from "react-router-dom";




export default function Services() {
  return (
        <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          delay: 0.5,
        },
      },
    }}
  >
        <NavLink to="/">
    <Home  exact>

    <BsFillArrowLeftCircleFill/><h1> BACK TO HOME </h1>
    </Home>
    </NavLink>
    <ServicesContainer id="services">
        <Helmet>
          <title>Moonbeam Trading Co. | Services</title>
        </Helmet>

      <ServicesTitle>
        SERVICES
        <h3>
          We are a team of experts in numerous trades of business, ready to
          reach new frontiers.
        </h3>
      </ServicesTitle>
    

<ServicesBox>
      <Paragraph>
    <h3 align="center"><b>TECHNOLOGY</b></h3> <br></br>
    <Image alt="Technology" src={technology}></Image>
    We work collaboratively to alleviate societal issues by providing
            technology services and consultation to businesses in a variety of
            sectors. These include: software engineering, Software As A Service
            (SaaS), predictive analytics, machine learning/artificial
            intelligence, and more.
                </Paragraph>
                <Paragraph> <h3 align="center"><b>AGRI-FOODS</b></h3> <br></br>
                <Image alt="Our Values" src={farmer}></Image>              
             
                Climate change and food insecurity are just a few of the challenges
            we face today, which can be addressed in part through the use of
            advanced agricultural technology. Our team of specialists grow our
            branded product, and assist farmers to realize greater annual yields
            and improved profits.
                </Paragraph>
                <Paragraph>
                <h3 align="center"><b>IMPORTS & EXPORTS</b></h3>
                <br></br>
                <Image alt="Early Successes" src={shipping}></Image>
                Through distributorships, knowledge exchange, or the introduction of
            new freight technologies, we are expanding our services to focus on
            creating mutually beneficial commercial success. Our team sources
            products from around the world to meet the demands of our Canadian
            customers.

</Paragraph>
<Paragraph>
                <h3 align="center"><b>E-COMMERCE</b></h3>
                <br></br>
                <Image alt="Early Successes" src={ecommerce}></Image>
                We have a goal of offering our customers positive online shopping
            experiences. Our sales and digital marketing team working alongside
            our partners in e-commerce and drop shipping, enhance your shopping
            experience while growing our international e-commerce expansion.

</Paragraph>
            
    
</ServicesBox>
    </ServicesContainer>
</motion.div>
  );
}

const Home = styled.div`
font-family: "Expletus Sans", sans-serif;
margin-left: 3rem;
cursor: pointer;
display: flex;
flex-direction: row;
align-items: center;
font-size: 20px;
h1 {
  font-size: 18px;
  margin-left: 1rem;
}
& :hover {
text-decoration: underline;
}
`

const Image = styled.img`
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 15px;
  @media (max-width: 1330px) {
    width: 90%;
  }
`;

const ServicesContainer = styled.div`
  height: 90vh;
  padding: 5rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  color: #000000;
  flex-direction: column;
  @media (max-width: 1650px) {
    height: 150vh;
  }
`;


const ServicesBox = styled.div`
font-family: "Expletus Sans", sans-serif;
margin-top: 3rem;
font-size: 13px;
width: 95%;
display: flex;
flex-direction: row;
justify-content: center;
@media (max-width: 1160px) {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`
const ServicesTitle = styled.div`
  margin-top: 1rem;
  font-family: "Expletus Sans", sans-serif;
  width: 800px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  // padding-top: 0.8rem;
  h3 {
    margin-top: 0rem;
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


const Paragraph = styled.p`
font-size: 16px;
// line-height: 16px;
width: 30%;
margin-right: 3rem;
margin-left: 3rem;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 1160) {
  width: 90%;

}
@media (max-width: 860px) {
// width: 90%;
margin-top: -2rem;
margin-bottom: 6rem;
h3 {
  font-size: 18px;
}
}
`