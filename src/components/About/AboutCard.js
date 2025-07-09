import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sharukh Khan </span>
            from <span className="purple"> Ajmer, India.</span>
            <br />
            I am currently employed as a <span className="purple"> Security Engineer II</span> at <span className="purple"> Accorian</span>.
            <br />
            I have completed MCA in <span className="purple"> Computer Applications</span> at <span className="purple"> Fergusson College, Pune</span>.
            <br />
            <br />
            Apart from hacking into systems ethically, here are a few things that keep me recharged:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 🏀 Playing Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> 🥾 Going on Treks
            </li>
            <li className="about-activity">
              <ImPointRight /> 🌍 Travelling and Exploring new places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to break, understand, and secure what truly matters."{" "}
          </p>
          <footer className="blockquote-footer">Sharukh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
