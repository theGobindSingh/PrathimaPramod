import "./Testimonials.css";
import React from "react";
import { Col, Row } from "react-bootstrap";

import { heading } from "../../Assets/Texts/Testimonials/Text";
import client1 from "../../Assets/Images/me.jpg";

export default function Testimonials() {
  var testis = [{ img: client1, name: "Gobind Singh", msg: "Best Therapist" }];
  return (
    <div id="Testimonials">
      <h1>{heading}</h1>
      <Row sm={2} md={4} className="testi row" style={{ padding: "2.5%" }}>
        {testis.map((Eve) => (
          <Col key={Eve}>
            <div className="Cont">
              <img src={Eve.img} alt="" />
              <div className="ContText">
                <h4>{Eve.name}</h4>
                <p>"{Eve.msg}"</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
