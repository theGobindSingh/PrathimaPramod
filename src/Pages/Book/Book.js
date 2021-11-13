import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CheckSquareFill } from "react-bootstrap-icons";
import "./Book.css";

/*
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import { useMutation, gql } from "@apollo/client";

const contact = gql`
  mutation ($name: String!, $email: String!, $msg: String!) {
    createContact(
      input: { data: { name: $name, email: $email, message: $msg } }
    ) {
      contact {
        name
        message
      }
    }
  }
`;
*/

export default function Book() {
  var [NAME, setName] = useState("");
  const inputName = (inp) => {
    setName(inp.target.value);
  };
  var [EMAIL, setEmail] = useState("");
  const inputEmail = (inp) => {
    setEmail(inp.target.value);
  };
  var [MSG, setMsg] = useState("");
  const inputMsg = (inp) => {
    setMsg(inp.target.value);
  };
  /*
  const [ContactSubmit, { data, loading, error }] = useMutation(contact);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  function subClick(){
                try {
                  ContactSubmit({
                    variables: {
                      name: NAME,
                      email: EMAIL,
                      msg: MSG,
                    },
                  }).then(() => {
                    try {
                      if (Object.keys(data).length === 1) {
                        alert(
                          "Submitted! Thank you, " +
                            data.createContact.contact.name
                        );
                      }
                    } catch (e) {
                      console.log(e);
                    }
                    if (error) {
                      return <Error />;
                    }
                  });
                } catch (e) {
                  console.log(e);
                }
              }
  */
  return (
    <div id="Book">
      <h1>Book an appointment.</h1>
      <div id="BookIn">
        <div className="BookContact">
          <div>
            <span>+91 96664 75998</span>
            <span>+91 12345 67890</span>
            <span>dharmapuri.prathima@iipr.in</span>
          </div>
        </div>
        <div className="rule"></div>
        <div className="BookForm">
          <Form>
            <Form.Group className="name mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Please enter your full name."
                onChange={inputName}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="email mb-3">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Please enter your e-mail address."
                onChange={inputEmail}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="phone mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Please enter your phone number."
                onChange={inputEmail}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="message mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="message"
                as="textarea"
                rows={10}
                placeholder="Please type your message."
                onChange={inputMsg}
              ></Form.Control>
            </Form.Group>
            <Button
              variant="light"
              onClick={() => {
                // call function subClick()
                console.log(NAME);
                console.log(EMAIL);
                console.log(MSG);
                alert("Submitted");
              }}
            >
              <span> Submit</span> <CheckSquareFill />
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
