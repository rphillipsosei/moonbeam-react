import React, { useState, useForm } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons'
import classes from "./Apply.Module.css";
import { Form, Button } from "react-bootstrap";
import * as AiIcons from "react-icons/ai";


export default function Apply() {
    const [state, handleSubmit] = useForm("xknyqzly");
    window.onbeforeunload = () => {
      for (const form of document.getElementsByTagName("form")) {
        form.reset();
      }
    };
    if (state.succeeded) {
      return (
        <p>
          Submitted sucessfully!
          <h6>
            Return to <a href="/">home page.</a>
          </h6>
        </p>
      );
    }

  return (
    <ApplyContainer>
      <ApplyContent>
        <ApplyTitle>
          Apply
          <h3>
            Any questions or inquiries? Apply us to get more information!
          </h3>
        </ApplyTitle>
        <h6 align="center">
            <b>SEE OUR CURRENT OPENINGS:</b></h6>
            <br></br>
            <a href="https://uploads.documents.cimpress.io/v1/uploads/1ef18f45-35c6-4a0d-a04f-f9d84fd3b2a3~110/original?tenant=vbu-digital">
              <br></br>Data Scientist - Job ID MTC2101DS
            </a>{" "}
            <br></br>
            <br></br>
            <div className="accessibility">
              <i>
                Think you might not qualify for any of the available positions
                above? Don't hesitate to apply to the position(s) of your choice
                using the form below or fill out the following PDF and email it
                to hiring@moonbeamtrading.ca. <br></br>At Moonbeam, we hire from
                a holistic perspective and see barriers to employment as
                potential strengths!
              </i>{" "}
              <br></br> <br></br> <br></br>
              <b>
                If you prefer, click here to view a PDF version of the
                application
              </b>
              <br></br>
              <div align="center">
                <a href="https://docdro.id/MwY5KLs">
                  <br></br>
                  <AiIcons.AiOutlineFilePdf  />
                </a>
              </div>
            </div>
            <br></br>
            <br></br>
            <h6 className="apply-instructions">
              Please answer all required questions at the minimum (marked with a
              star). <br></br>You can provide as little or as much detail as you
              would like for the open-ended questions.
            </h6>
        {/* <ApplyBox>
          <Form 
          style={form} 
          onSubmit={handleSubmit}
                action="https://formspree.io/f/xknyqzly"
                method="post"
                className="apply-form">

            <Form.Group style={formField} className="mb-3">
              <Form.Label style={formLabel}>First Name</Form.Label>
              <Form.Control
                      type="text"
                      name="FirstName"
                      required
                      placeholder="First Name"
              />
            </Form.Group>


            <Form.Group
              style={formField}
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Label style={formLabel}>Last Name</Form.Label>
              <Form.Control
                      type="text"
                      name="LastName"
                      placeholder="Last Name"
                      required
              />
            </Form.Group>

            <Form.Group style={formField} className="mb-3">
              <Form.Label style={formLabel}> Preferred Name</Form.Label>
              <Form.Control
                 type="text"
                 name="PreferredName"
                 placeholder="Preferred Name"
              />
            </Form.Group>

            <Form.Group style={formField} className="mb-3">
              <Form.Label style={formLabel}>Email</Form.Label>
              <Form.Control
                  type="email"
                  name="Email"
                  required
                  placeholder="Email"
              />
            </Form.Group>

            <Form.Group style={formField} className="mb-3">
              <Form.Label style={formLabel}>Phone Number</Form.Label>
              <Form.Control
                placeholder="Phone Number"
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="Phone number"
              />

            </Form.Group>

            <Form.Group style={formField} className="mb-3">
              <Form.Label style={formLabel}>Address</Form.Label>
              <Form.Control
                type="text" name="Address" placeholder="Address"
              />
            </Form.Group>

            <Form.Group style={formField} className="mb-3">
              <Form.Label style={formLabel}>Postal Code</Form.Label>
              <Form.Control
                type="text"
                name="PostalCode"
                placeholder="Postal Code"
              />
            </Form.Group>

            <Form.Group style={formField} className="mb-3">
              <Form.Label style={formLabel}>Highest Level of Education Completed:</Form.Label>
              <Form.Control
            type="text"
                      name="HighestLevelOfEducation"
              />
            </Form.Group>

            <Form.Group style={formField} className="mb-3">
              <Form.Label style={formLabel}>Field of Study</Form.Label>
              <Form.Control
               type="text"
               ame="FieldOfStudy"
               
              />
            </Form.Group>

            <Form.Group style={formField} className="mb-3">
              <Form.Label style={formLabel}>Do you identify as a member of a visible minority group? (Type Y for Yes, or N for No): </Form.Label>
              <Form.Control
         type="text"
         name="IdentifyAsMemberOfVisibleMinority"
              />
            </Form.Group>

            <Form.Group style={formField} className="mb-3">
              <Form.Label style={formLabel}>Have you faced any obstacles in your education? If so, please feel free to share:</Form.Label>
              <Form.Control
               type="text"
               name="BarriersFacedCompletingEducation"
              />
            </Form.Group>

            <Form.Group style={formField} className="mb-3">
              <Form.Label style={formLabel}>Have you faced any obstacles in finding employment? If so, please feel free to share:</Form.Label>
              <Form.Control
                type="text"
                name="BarriersFacedSeekingEmployment"
              />
            </Form.Group>

            <Form.Group style={formField} className="mb-3">
              <Form.Label style={formLabel}>Have you faced any difficult life-transitions such as
                  homelessness, drug addiction and/or mental health?  If so, please feel free to share:</Form.Label>
              <Form.Control
                type="text"
                name="PeriodsOfLifeTransitions"
              />
            </Form.Group>

            <Form.Group style={formField} className="mb-3">
              <Form.Label style={formLabel}>Which of your past experiences (in life or in work) would complement this role?</Form.Label>
              <Form.Control
             type="text"
             name="SuitableForThisRole"
              />
            </Form.Group>

            <Form.Group style={formField} className="mb-3">
              <Form.Label style={formLabel}>Is there any additional information you would like our hiring team to know?</Form.Label>
              <Form.Control
      type="text"
      name="AdditionalInfo"
              />
            </Form.Group>

            <Form.Group style={formField} className="mb-3">
              <Form.Label style={formLabel}>Which position(s) are you applying for?</Form.Label>
              <Form.Control
    type="text"
    name="PositionsApplyingFor"
              />
            </Form.Group>

            <Button
                  type="submit"
                  variant="primary"
                  disabled={state.submitting}
                >
                  Submit
                </Button>
          </Form>
        </ApplyBox> */}
      </ApplyContent>
    </ApplyContainer>
  );
}

const ApplyContainer = styled.div`
  border: 3px solid red;
  height: 84.5vh;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 20rem;
  border: 3px solid green;
`;

const ApplyContent = styled.div`
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

const ApplyTitle = styled.div`
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

const ApplyBox = styled.div`
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
