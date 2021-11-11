import "./Home.css";
import React from "react";
import { mainText, secondaryText } from "../../Assets/Texts/Home/Text";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div id="Home">
      <h1 className="mainText">{mainText}</h1>
      <p className="secondaryText">{secondaryText}</p>
      <Link to="/Book">
        <button>Get Support</button>
      </Link>
    </div>
  );
}
