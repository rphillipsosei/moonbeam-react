import React from "react";
import styled from "styled-components";
import growth from "../assets/growth.jpg"

export default function About() {
  return (
    <AboutContainer id="shop">
      <AboutContent id="shop">
        <AboutTitle>ABOUT US</AboutTitle>
        {/* <Image src={growth}/> */}
<AboutBox>
    <AboutSection>
      <Paragraph>
    <h3 align="center">OUR BACKGROUND</h3> <br></br>
                The year 2018 to Q1 2020 brought early success and a foundation for
                growth.
                <br></br>
                <br></br>
                Moonbeam Trading Company was founded in 2018 by former tech
                sector executive Mark McDonald
                <br></br>
                <br></br>
                We have a strong belief in combining the power of agriculture,
                technology, trade and human development to create sustainable
                economics, shared wealth, equity and environmental stewardship.
                <br></br>
                <br></br>We aim to inspire the world by showing this is
                possible.
                <br></br>
                <br></br>
                <br></br>
                </Paragraph>
                <Paragraph>
                <h3 align="center">EARLY SUCCESS</h3>
                <br></br>
                2018 to Q1 2020 brought early success and a foundation for
                growth; 
                <br></br>
                <br></br>
                - Google / Sidewalk Labs project<br></br>- Letter of intent to
                  acquire $10M company <br></br>- New import suppliers - South
                  America<br></br>- Staffing expansion plan<br></br>- New
                  location warehouse expansion <br></br>- eCommerce partnership
                  <br></br>- technology partnership<br></br>
</Paragraph>
    <Paragraph> <h3 align="center">OUR VALUES</h3> <br></br>
              
              
             
                We strive to provide world-class business and technology
                services in Canada, with the help of our valued employees and
                advancing technology.
                <br></br>
                <br></br>
                Our goal is to achieve this by using sustainable products to
                initiate social change through community partnerships,
                collaboration, fair trading, ethical farming, and support of
                living wages. Most importantly, we will continue to care for and
                support the communities and the environment that we are a part
                of.
                <br></br>
                <br></br>
                We want to have a positive social impact wherever we do
                business.
                </Paragraph>
              </AboutSection>
    
</AboutBox>
    <LandAcknowledgement>
        <LandBack>
        <h3 align="center"><u>LAND ACKNOWLEDGEMENTS</u></h3> 
             
                  We would like to acknowledge the fact that the land on which
                  we gather, and operate our business, is part of the Treaty
                  Lands and Territory of the Mississaugas of the Credit. For
                  thousands of years, Indigenous peoples inhabited and cared for
                  this land. In particular we acknowledge the territory of the
                  Anishinabek, Huron-Wendat, Haudenosaunee and Ojibway/Chippewa
                  peoples; the land that is home to the Metis; and most
                  recently, the territory of the Mississaugas of the Credit
                  First Nation who are direct descendants of the Mississaugas of
                  the Credit. We are grateful to have the opportunity to work on
                  this land, and by doing so, give our respect to its first
                  inhabitants
                <br></br>
                <br></br>
                We would like to acknowledge the African Diaspora, its elders,
                  their descendants and the lands upon which they live. For
                  thousands of years African Indigenous peoples inhabited and
                  cared for the land with a spiritual and cultural connection to
                  the earth. In particular we acknowledge the continuing efforts
                  to reconnect and reclaim African Indigenous ways of being and
                  doing. We are grateful for the opportunity and responsibility
                  to embrace our heritage, and by doing so, give our respect to
                  the ancestors.
                <br></br>
                <br></br>
               </LandBack>
    </LandAcknowledgement>
      </AboutContent>
    </AboutContainer>
  );
}


const AboutContainer = styled.div`
  // border: 3px solid red;
  // padding: 0.5rem;
  height: 84.5vh;
  width: 100%;
  margin-top: 1rem;
  //  margin: 0;
  margin-bottom: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
height: 200px;
`

const AboutContent = styled.div`
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
  background-size: cover;
  color: #000000;
  flex-direction: column;
`;

const AboutTitle = styled.div`
// background-color: rgba(37, 36, 37, 0.6);

  width: 450px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 50px;
  text-align: center;
  border: 3px solid white;
`;

const AboutBox = styled.div`
margin-top: 10rem;

width: 1700px;
height: 370px;
// border: 3px solid hotpink;
display: flex;
flex-direction: row;
justify-content: center;

`

const AboutSection = styled.div`
width: 95%;
// height: 600px;
border: 3px solid #ffff;
display: flex;
text-align: center;
// border: 3px solid green;
// background-color: rgba(37, 36, 37, 0.6);

`

const Paragraph = styled.p`
width: 30%;
margin-right: 3rem;
margin-left: 3rem;
text-align: justify;
`
const LandAcknowledgement = styled.div`
margin-top: 3rem;
width: 95%;
border: 3px solid #000000;
// padding: 1rem 3rem;
font-size: 10px;
text-align: center;
padding: 0 1rem;
`
const LandBack = styled.div`
font-style: italic;
h3 {
  font-size: 18px;
}
`