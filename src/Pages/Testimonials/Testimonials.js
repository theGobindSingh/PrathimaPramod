import "./Testimonials.css";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import { heading } from "../../Assets/Texts/Testimonials/Text";
import client1 from "../../Assets/Images/me.jpg";

export default function Testimonials() {
  var testis = [
    { img: client1, name: "Gobind Singh", msg: "Best Therapist" },
    { img: client1, name: "Gobind Singh", msg: "Best Therapist" },
    { img: client1, name: "Gobind Singh", msg: "Best Therapist" },
    { img: client1, name: "Gobind Singh", msg: "Best Therapist" },
    { img: client1, name: "Gobind Singh", msg: "Best Therapist" },
  ];
  return (
    <div id="Testimonials">
      <h1>{heading}</h1>
      <Row sm={2} md={4} className="testi row" style={{ padding: "2.5%" }}>
        {testis.map((Eve, index) => (
          <Col key={index}>
            <Card className="card">
              <Card.Img variant="top" alt="Card image" src={Eve.img} />
              <Card.ImgOverlay className="card-img-overlay d-flex flex-column justify-content-end">
                <Card.Title style={{ paddingLeft: "7px" }}>
                  {Eve.name}
                </Card.Title>
                <p style={{ fontSize: "0.9rem", paddingLeft: "5%" }}>
                  "{Eve.msg}"
                </p>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
