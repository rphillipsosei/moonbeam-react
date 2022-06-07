
import styled from "styled-components";
import React from 'react'
import Services from "./Services";
import Shop from "./Shop";
import Navigation from "../components/Navigation";
import Careers from "./Careers.jsx"
import About from "./About.jsx"
import Contact from "./Contact.jsx" 
import homebg from "../assets/bigdata.jpg"

export default function Home() {
  return (
<AppContainer>
<Navigation/>
    <HomeContainer>
      <head>
        <title>Moonbeam Trading Co.</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <HomeContent>
        <HomeTitle>
          Moonbeam Trading Company
          <h3>Services that create business, customer, and community value</h3>
        </HomeTitle>
      </HomeContent>
    </HomeContainer>
    <Services/>
    <Shop/>
    <Careers/>
    <About/>
    <Contact/>
    </AppContainer>

  );
}



const AppContainer = styled.div`
padding: 1rem;
height: 100vh;
// border: 3px solid green;
// display: flex;
// flex-direction: column;
`



const HomeContainer = styled.div`
  // border: 3px solid red;
  // padding: 0.5rem;
  height: 84.5vh;
  width: 100%;
  margin-top: 1rem;
//  margin: 0;
margin-bottom: 20rem;
`;
const HomeContent = styled.div`
  // border: 3px solid yellow;
  // margin: 0.7rem 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  font-family: "Comfortaa", sans-serif;
  // background-color: rgba(12, 121, 190, 255);
  background-image: url(${homebg});
  color: #ffff;
  flex-direction: column;
`;

const HomeTitle = styled.div`
background-color: rgba(37, 36, 37, 0.8);
height: 200px;
width: 1250px;
display: flex;
align-items: center;
flex-direction: column;
// align-items: center;
justify-content: center;
// border-radius: 15px;
border: 2px solid #ffff;
  margin-top: 3rem;
  font-size: 70px;
  text-align: center;
  h3 {
    font-size: 20px;
    font-weight: normal;
    font-style: italic;
  }
`;