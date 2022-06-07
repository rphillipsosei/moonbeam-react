import React from "react";
import styled from "styled-components";
import diversity from "../assets/brickwall.jpg"
import { Button } from "react-bootstrap";

export default function Careers() {
  return (
    <CareersContainer id="shop">
      <CareersContent id="shop">
        <CareersTitle>CAREERS
<h3>
Join our diverse, multi-faceted team.
</h3>
          
        </CareersTitle>
       <CareersBox>
      <Image src={diversity}/> <p></p><h3 >
                AT MOONBEAM TRADING COMPANY,<br></br> WE HIRE FROM A HOLISTIC
                PERSPECTIVE...
             

              </h3>
              
              <h6 >
                We recognize all of the different life transitions that people
                may encounter in life. <br></br>
                We value everyone's opinion, and believe the key to success is
                having a multitude of perspectives.
                <br></br>
                <br></br>
                If you have faced any career obstacles relating to
                accessibility, or life challenges such as addition,
                incarceration, and/or physical/mental health , you are
                encouraged <br></br>to apply. <br></br> <br></br>Tell us your story!
              </h6>
              <Button fullWidth  variant="primary" type="submit" >Apply</Button>
       </CareersBox>
      </CareersContent>
    </CareersContainer>
  );
}

const Image = styled.img`
border-radius: 15px;
height: 250px;
`

const CareersContainer = styled.div`
  border: 3px solid red;
  // padding: 0.5rem;
  height: 84.5vh;
  width: 100%;
  margin-top: 1rem;
  //  margin: 0;
  margin-bottom: 20rem;
`;

const CareersContent = styled.div`
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
  // background-color: rgba(12, 121, 190, 255);
  // background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
  // color: #ffff;
  flex-direction: column;
`;

const CareersTitle = styled.div`
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
  // margin-top: -0.1rem;
  font-size: 17px;
  font-weight: normal;
  font-style: italic;
`;

const CareersBox = styled.div`
margin-top: 3rem;
  border: 3px solid pink;
  height: 80%;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  // margin-top: -2rem;
  align-items: flex-start;
  justify-content: center;
p {
  // max-height: 300px;
}
h3 {
  margin-top: -4rem;
}
  h6 {
    margin-top: -4rem;
    font-size: 14px;
  //  width: 600px;
  //  height: 180px;
   border: 3px solid orange;
    text-align: center;
    margin-bottom: -5rem
  }
`;

