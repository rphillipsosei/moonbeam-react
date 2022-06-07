import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons'
import classes from "./Contact.Module.css";
import { Form, Button } from "react-bootstrap";

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
    <ContactContainer>
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
              <Form.Label style={formLabel}>Email address</Form.Label>
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
  );
}

const ContactContainer = styled.div`
  border: 3px solid red;
  height: 84.5vh;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 20rem;
  border: 3px solid green;
`;

const ContactContent = styled.div`
  border: 3px solid yellow;
  // margin: 2rem 0;
  height: 100%;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 2rem;
  font-family: "Comfortaa", sans-serif;
  //   background-color: rgba(12, 121, 190, 255);
  //   background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
  color: #000000;
  flex-direction: column;
`;

const ContactTitle = styled.div`
  // background-color: rgba(37, 36, 37, 0.6);
  // border: 3px solid rgba(12, 121, 190, 255);
  margin-top: 5rem;
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
  }
`;

const ContactBox = styled.div`
//   border: 3px solid hotpink;
  height: 500px;
  width: 80%;
  margin-top: 3rem;
  display: flex;
  // flex-wrap: wrap;
  // margin-top: 2rem;
  align-items: center;
  justify-content: center;
`;

const formLabel = {
  fontSize: "20px",
  textAlign: "center",
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
