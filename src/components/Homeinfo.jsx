import React from "react";
import { Link } from "react-router-dom";
import {arrow} from "../../assets/icons"

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-ul text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">{btnText}
    <img src ={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Muhammad Adnan Imam </span>👋
      <br />A MERN STACK DEVELOPER FROM KARACHI, PAKISTAN.
    </h1>
  ),
  2: (
    <h1>
      <InfoBox
        text="Worked with many companies and picked up many sklls along the way."
        link="/about"
        btnText="Learn more"
      />
    </h1>
  ),
  3: (
    <h1>
      <InfoBox
        text="Led multiple projects to success over the year. curious about the impact?"
        link="/projects"
        btnText="Visits my Protfolio"
      />
    </h1>
  ),
  4: (
    <h1>
      <InfoBox
        text="Need a project done or looking for a dev? i'm just a few keystrokes away."
        link="/contact"
        btnText="Let's talk"
      />
    </h1>
  ),
};

const Homeinfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default Homeinfo;
