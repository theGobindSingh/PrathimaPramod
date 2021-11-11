import "./About.css";
import {
  aboutHead,
  aboutHead2,
  aboutText,
  aboutEduHead,
  aboutEdu,
} from "../../Assets/Texts/About/Text";
import pp from "../../Assets/Images/pp.png";
import React from "react";
import eduPic from "../../Assets/Images/edu.jpg";

export default function About() {
  return (
    <div id="About">
      <div className="aboutMain">
        <div className="textCont">
          <h1>{aboutHead}</h1>
          <p>{aboutHead2}</p>
        </div>
        <div className="imgCont">
          <img src={pp} alt="" />
        </div>
      </div>
      <div className="aboutMe">
        <div>
          {aboutText.split("\n").map((str, index) => {
            return <p key={index}>{str}</p>;
          })}
        </div>
      </div>
      <div className="aboutEdu">
        <div className="eduHead">
          <h1>{aboutEduHead}</h1>
        </div>
        <div className="eduDetail">
          <ul>
            {aboutEdu.map((str, ind) => {
              return <li key={ind}>{str}</li>;
            })}
          </ul>
        </div>
        <img src={eduPic} alt="" />
      </div>
    </div>
  );
}
