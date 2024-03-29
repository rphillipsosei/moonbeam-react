import React from "react";
import styled from "styled-components";
import diversity from "../assets/brickwall.jpg";
import { Button } from "react-bootstrap";
import jobApp from "../assets/jobApp.pdf";
import {motion} from "framer-motion"
import { Helmet } from "react-helmet";
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import { NavLink } from "react-router-dom";

export default function Careers() {
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
    <CareersContent>
      <div>
        <Helmet>
          <title>Moonbeam Trading Co. | Careers</title>
        </Helmet>
      </div>
      <CareersTitle>
        CAREERS
        <h3>Join our diverse, multi-faceted team.</h3>
      </CareersTitle>
      <Image src={diversity} /> <p></p>
      <CareersBox>
        <h3>
          <b>
            AT MOONBEAM TRADING COMPANY, WE HIRE FROM A HOLISTIC PERSPECTIVE...
          </b>
        </h3>

        <h6>
          We recognize all of the different life transitions that people may
          encounter in life. 
          We value everyone's opinion, and believe the key to success is having
          a multitude of perspectives.
          <br></br>
          <br></br>
          If you have faced any career obstacles relating to accessibility, or
          life challenges such as addition, incarceration, and/or
          physical/mental health, you are encouraged to apply.{" "}
          <br></br> <br></br>Tell us your story!
          <br></br>
          <br></br>
          Click below to download a PDF of the applciation. Please fill it out
          and email it to hiring@moonbeamtrading.ca
          <br></br>
          <br></br>
          <Button
            fullWidth
            variant="primary"
            type="submit"
            href={jobApp}
            download
          >
            Apply
          </Button>
        </h6>
      </CareersBox>
    </CareersContent>
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
  border-radius: 15px;
  height: 250px;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    height: 200px;
  }
  @media (max-width: 530px) {
    height: 170px;
  }
  @media (max-width: 530px) {
    height: 130px;
    margin-bottom: -1rem;
  }
`;

const CareersContent = styled.div`
  height: 90vh;
  padding: 5rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 2rem;
  font-family: "Expletus Sans", sans-serif;
  flex-direction: column;
`;

const CareersTitle = styled.div`
  margin-bottom: 1.5rem;
  margin-top: 1rem;
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
  h3 {
    margin-top: -0.1rem;
    font-size: 17px;
    font-weight: normal;
    font-style: italic;
  }
`;

const CareersBox = styled.div`
  text-align: center;
  height: 400px;
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding-left: 3rem;
  padding-right: 3rem;

 
  h3 {
    @media (max-width: 530px) {
      font-size: 17px;
      width: 360px;
    }
  }
  h6 {
    font-size: 16px;
    text-align: center;
    width: 450px;
  }
  @media (max-width: 530px) {
    height: 600px;
    width: 400px;
  }
`;
