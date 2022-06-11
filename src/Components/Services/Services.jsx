import React from 'react'
import './Services.css';
import Humble from '../../img/humble.png';
import Card from '../Card/Card.jsx';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Profile from './Profile.pdf';

const Services = () => {
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Clients always get high quality services when they hire me.
          <br />
          <br />
        
        </span>
        <a href={Profile} download>
          <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        {/* first card */}
        <div
          style={{
            left: "14rem",
          }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Canva, Photoshop, Adobe XD"}
          />
        </div>

        {/* second card */}
        <div style={{ top: "10rem", left: "0rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Ruby, Ruby On Rails, JavaScript, React, Redux, Node, Express, Next js, PHP"}
          />
        </div>

        {/* third card */}
        <div style={{ top: "12rem", left: "26rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "HTML, CSS, Bootstrap, Tailwind, Flexbox, Grid, Styled-Components"
            }
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services
