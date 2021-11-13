import "./Footer.css";
import React from "react";
import { Instagram, Whatsapp, Envelope } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <div id="Footer">
      <a
        href="https://instagram.com/prathima_pramod"
        target="_blank"
        rel="noreferrer"
        className="insta"
      >
        <Instagram />
      </a>
      <a
        href="https://wa.me/+919666475998"
        target="_blank"
        rel="noreferrer"
        className="whatsapp"
      >
        <Whatsapp />
      </a>
      <a
        href="mailto:dharmapuri.prathima@iipr.in"
        target="_blank"
        rel="noreferrer"
        className="email"
      >
        <Envelope />
      </a>
    </div>
  );
}
