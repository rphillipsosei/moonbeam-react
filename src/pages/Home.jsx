
import styled from "styled-components";
import React from 'react'
import homebg from "../assets/bigdata.jpg"
import {Helmet} from 'react-helmet'
import {motion} from "framer-motion";
import Banner from "../assets/moonbeam-banner.jpg"

export default function Home() {
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
<AppContainer>

      <Helmet>
        <title>Moonbeam Trading Co. | Home</title>
      </Helmet>
 
    
      <head>
        <title>Moonbeam Trading Co.</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <HomeContent>
        <MoonbeamBanner alt="Moonbeam Trading Company" src={Banner}>
        </MoonbeamBanner>
        {/* <HomeTitle>
          moonbeam <br></br>trading<br></br> company
          <h3>Services that create business, customer, and community value</h3>
        </HomeTitle> */}
      </HomeContent>
    </AppContainer>
      </motion.div>
  );
}

const MoonbeamBanner = styled.img`

`

const AppContainer = styled.div`
height: 90vh;
// padding: 0.7rem;
`



const HomeContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  // font-family: "Sen", sans-serif;
  // background-image: url(${homebg});
  background-size: cover;
  color: #ffff;
  flex-direction: column;
`;

const HomeTitle = styled.div`
// background-color: rgba(37, 36, 37, 0.8);
color: #000000;
height: 200px;
width: 1250px;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
border: 2px solid #ffff;
  margin-top: 3rem;
  font-size: 50px;
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