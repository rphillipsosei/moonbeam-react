
import styled from "styled-components";
import React from 'react'
import homebg from "../assets/bigdata.jpg"
import {Helmet} from 'react-helmet'

export default function Home() {
  return (
    
<AppContainer>

    <div>
      <Helmet>
        <title>Moonbeam Trading Co. | Home</title>
      </Helmet>
      </div>
    
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
    
    {/* <Services/> */}
    {/* <Shop/> */}
    {/* <Careers/> */}
    {/* <About/> */}
    {/* <Contact/> */}
    {/* <Apply/> */}
    </AppContainer>

  );
}



const AppContainer = styled.div`
// padding: 1rem;
height: 90vh;
// border: 3px solid green;
// display: flex;
// flex-direction: column;
padding: 0.7rem;
`



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
  background-image: url(${homebg});
  background-size: cover;
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

  /* ========== MEDIA QUARIES for title ========== */
  @media (max-width: 1368px) {
    width: 1000px;
    font-size: 60px;
  }
  @media (max-width: 1067px) {
    width: 600px;
    font-size: 50px;
    height: 300px;
  }
  @media (max-width: 700px) {
    width: 370px;
    font-size: 50px;
    height: 300px;
  }
  @media (max-width: 420px) {
    width: 270px;
    height: 300px;
    font-size: 30px;
  }
`;