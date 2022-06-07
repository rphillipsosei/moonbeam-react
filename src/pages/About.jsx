import React from "react";
import styled from "styled-components";
import background from "../assets/image.webp"

export default function About() {
  return (
    <AboutContainer id="shop">
      <AboutContent id="shop">
        <AboutTitle>ABOUT US</AboutTitle>
<AboutBox>
    <AboutSection>
    <h3 align="center"><u>OUR BACKGROUND</u></h3> <br></br>
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
                <h3 align="center"><u>EARLY SUCCESS</u></h3>
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
    </AboutSection>
    <AboutSection>
        
    <h3 align="center"><u>OUR VALUES</u></h3> <br></br>
              
              <br></br>
              <p>
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
                </p>
              
    </AboutSection>
    <AboutSection>
        <p>
        <h3 align="center"><u>LAND ACKNOWLEDGEMENTS</u></h3> <br></br>
              <br></br>
             
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
               </p>
    </AboutSection>
</AboutBox>
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
`;

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
  background-color: rgba(12, 121, 190, 255);
  background-image: url(${background});
  color: #ffff;
  flex-direction: column;
`;

const AboutTitle = styled.div`
background-color: rgba(37, 36, 37, 0.6);
  margin-top: 5rem;
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
margin-top: 1rem;
width: 1700px;
height: 600px;
// border: 3px solid hotpink;
display: flex;
flex-direction: row;
justify-content: space-between;
`

const AboutSection = styled.div`
width: 500px;
height: 600px;
border: 3px solid #ffff;

text-align: center;
background-color: rgba(37, 36, 37, 0.6);
 
`
