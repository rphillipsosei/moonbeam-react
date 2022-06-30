import React from "react";
import styled from "styled-components";
import {Helmet} from 'react-helmet'
import work from '../assets/work.webp';
import growth from '../assets/growth.webp';
import diversity from '../assets/diversity.webp';
import { motion } from "framer-motion";




export default function About() {
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
   <AboutContent id="shop">
       <div>
    <Helmet>
      <title>Moonbeam Trading Co. | Careers</title>
    </Helmet>
  </div>
    
        <AboutTitle>ABOUT US
          <h3>
          Our story. Our values. Our successes.
          </h3>
        </AboutTitle>
<AboutBox>
      <Paragraph>
    <h3 align="center"><b>OUR BACKGROUND</b></h3> <br></br>
    <Image alt="Our Background" src={work}></Image>
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
                </Paragraph>
                <Paragraph> <h3 align="center"><b>OUR VALUES</b></h3> <br></br>
                <Image alt="Our Values" src={diversity}></Image>              
             
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
                <br></br><br></br>
                </Paragraph>
                <Paragraph>
                <h3 align="center"><b>EARLY SUCCESS</b></h3>
                <br></br>
                <Image alt="Early Successes" src={growth}></Image>
                2018 to Q1 2020 brought early success and a foundation for
                growth; 
                <br></br>
                <br></br>
                - Google / Sidewalk Labs project<br></br>- Letter of intent to
                  acquire $10M company <br></br>- New import suppliers - South
                  America<br></br>- Staffing expansion plan<br></br>- New
                  location warehouse expansion <br></br>- eCommerce partnership
                  <br></br>- technology partnership<br></br><br></br>

</Paragraph>
    
            
    
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
      </motion.div>
  );
}


const Image = styled.img`
width: 400px;
margin-bottom: 3rem;
border-radius: 15px;
`

const AboutContent = styled.div`
  height: 100%;
  padding: 5rem 0;
  display: flex;
  align-items: center;
  padding-top: 2rem;
  font-family: "Comfortaa", sans-serif;
  background-size: cover;
  color: #000000;
  flex-direction: column;
`;

const AboutTitle = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 50px;
  text-align: center;
  flex-direction: column;
  h3 {
    font-weight: normal;
    font-style: italic;
    font-size: 17px;
    margin-top: 0rem;
    @media (max-width: 1180px) {
      margin-top: -1rem;
    }
`;

const AboutBox = styled.div`
margin-top: 3rem;
font-size: 13px;
width: 95%;
display: flex;
flex-direction: row;
justify-content: center;
@media (max-width: 860px) {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`


const Paragraph = styled.p`
line-height: 16px;
width: 30%;
margin-right: 3rem;
margin-left: 3rem;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
@media (max-width: 860px) {
width: 90%;
margin-top: -2rem;
margin-bottom: 6rem;
h3 {
  font-size: 18px;
}
}
`
const LandAcknowledgement = styled.div`
margin-top: 3rem;
width: 95%;
border: 3px solid #000000;
font-size: 10px;
text-align: center;
padding: 0 1rem;
`
const LandBack = styled.div`
font-style: italic;

@media (max-width: 800px) {
  max-height: 200px;
overflow: scroll;
overflow-x: hidden;
}
h3 {
  font-size: 18px;
}
`