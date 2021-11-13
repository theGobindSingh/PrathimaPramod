import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Whatsapp,
  Envelope,
  Telephone,
} from "react-bootstrap-icons";

export default function Header() {
  function navi() {
    try {
      //toggle nav
      document.querySelector(".nav-links").classList.toggle("nav-active");
      //animate links
      document.querySelectorAll(".nav-links li").forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`;
        }
      });
      //burger animation
      document.querySelector(".burger").classList.toggle("toggle");
    } catch {}
  }

  return (
    <div id="Header">
      <Link to="/">HOME</Link>
      <Link to="/About">ABOUT</Link>
      <Link to="/" className="headerMid">
        Prathima Pramod
      </Link>
      <Link to="/Testimonials">TESTIMONIALS</Link>
      <Link to="/Book">BOOK</Link>
      <nav className="headNav">
        <ul className="nav-links">
          <li
            onClick={() => {
              navi();
            }}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={() => {
              navi();
            }}
          >
            <Link to="/About">About</Link>
          </li>
          <li
            onClick={() => {
              navi();
            }}
          >
            <Link to="/Testimonials">Testimonials</Link>
          </li>
          <li
            onClick={() => {
              navi();
            }}
          >
            <Link to="/Book">Book</Link>
          </li>
          <li
            onClick={() => {
              navi();
            }}
            className="icons"
          >
            <a href="tel:+919666475998" target="_blank" rel="noreferrer">
              <Telephone />
            </a>
            <a
              href="https://instagram.com/prathima_pramod"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://wa.me/+919666475998"
              target="_blank"
              rel="noreferrer"
            >
              <Whatsapp />
            </a>
            <a
              href="mailto:dharmapuri.prathima@iipr.in"
              target="_blank"
              rel="noreferrer"
            >
              <Envelope />
            </a>
          </li>
        </ul>
      </nav>
      <div
        className="burger"
        onClick={() => {
          navi();
        }}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
}
