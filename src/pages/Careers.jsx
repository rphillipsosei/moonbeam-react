import React from "react";
import styled from "styled-components";
import diversity from "../assets/brickwall.jpg";
import { Button } from "react-bootstrap";
import jobApp from "../assets/jobApp.pdf";

import { Helmet } from "react-helmet";

export default function Careers() {
  return (
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
          encounter in life. <br></br>
          We value everyone's opinion, and believe the key to success is having
          a multitude of perspectives.
          <br></br>
          <br></br>
          If you have faced any career obstacles relating to accessibility, or
          life challenges such as addition, incarceration, and/or
          physical/mental health , you are encouraged <br></br>to apply.{" "}
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
  );
}

const Image = styled.img`
  // border: 4px solid green;
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
  // border: 3px solid yellow;
  // margin: 2rem 0;
  height: 90vh;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 2rem;
  font-family: "Comfortaa", sans-serif;
  // background-color: rgba(12, 121, 190, 255);
  // background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
  // color: #ffff;
  flex-direction: column;
`;

const CareersTitle = styled.div`
  margin-bottom: 1.5rem;
  // background-color: rgba(37, 36, 37, 0.6);
  // border: 3px solid rgba(12, 121, 190, 255);
  margin-top: 1rem;
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
    margin-top: -0.1rem;
    font-size: 17px;
    font-weight: normal;
    font-style: italic;
  }
`;

const CareersBox = styled.div`
  text-align: center;
  // border: 3px solid hotpink;
  height: 400px;
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

 
  h3 {
    @media (max-width: 530px) {
      font-size: 17px;
      margin-bottom: -1rem;
      width: 360px;
    }
  }
  h6 {
    font-size: 14px;
    //  border: 3px solid orange;
    text-align: center;
    width: 350px;
  }
  @media (max-width: 530px) {
    height: 600px;
    width: 400px;
  }
`;
