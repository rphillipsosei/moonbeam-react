import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons'
import classes from "./Contact.Module.css";
import { Form, Button } from "react-bootstrap";
import {Helmet} from 'react-helmet'
import { motion } from "framer-motion";
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import { NavLink } from "react-router-dom";


export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(name, message, email);

    fetch("https://formsubmit.co/ajax/moonbeamtradingco@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setEmail("");
        setMessage("");
        setName("");
        setLoading(false);
        setSent(true);
        setTimeout(() => {
          setSent(false);
        }, 15000);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

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
    <ContactContainer>
         <div>
    <Helmet>
      <title>Moonbeam Trading Co. | Services</title>
    </Helmet>
    </div>
      <ContactContent>
        <ContactTitle>
          CONTACT
          <h3>
            Any questions or inquiries? Contact us to get more information!
          </h3>
        </ContactTitle>
        <ContactBox>
          <Form style={form}>
            <Form.Group style={formField} className="mb-3">
              <Form.Label style={formLabel}>Name</Form.Label>
              <Form.Control
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              style={formField}
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Label style={formLabel}>Email Address</Form.Label>
              <Form.Control
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              style={formField}
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label style={formLabel}>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {!loading ? (
                `Submit`
              ) : (
                <FontAwesomeIcon icon={faSpinner} className={classes.spinner} />
              )}
            </Button>
            {sent && (
              <div className={classes.sent}>
                Message sent. Thanks for reaching out!
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
             </Form>
        </ContactBox>
      </ContactContent>
    </ContactContainer>
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


const ContactContainer = styled.div`
font-family: "Expletus Sans", sans-serif;
  height: 84.5vh;
  width: 100%;
  margin-top: 5rem 0;
`;

const ContactContent = styled.div`
  height: 100%;
  padding: 5rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 2rem;
  // font-family: "Sen", sans-serif;
  color: #000000;
  flex-direction: column;
`;

const ContactTitle = styled.div`
width: 100%;
height: 70px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 8rem;
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

const ContactBox = styled.div`
  height: 500px;
  width: 80%;
  margin-top: 3rem;
  display: flex;
  // flex-wrap: wrap;
  justify-content: center;
`;

const formLabel = {
  fontSize: "20px",

};
const form = {
  width: "600px",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
};

const formField = {
  marginBottom: "3rem",
};
