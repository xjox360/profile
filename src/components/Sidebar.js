import React from "react";
import projectImage from "../Images/project.png";
import aboutMeImage from "../Images/man.png";
import background from "../Images/student.png";
import experience from "../Images/building.png";
import aboutSite from "../Images/browser.png";

export default function Sidebar(props) {
  return (
    <ul>
      <li
        className="sideBarItem"
        onClick={() => {
          props.action("projects");
        }}
      >
        <h1>Projects</h1> <img src={projectImage} alt={"Projects"}></img>
      </li>
      <li
        className="sideBarItem"
        onClick={() => {
          props.action("aboutMe");
        }}
      >
        <h1>About me</h1> <img src={aboutMeImage} alt={"Projects"}></img>
      </li>
      <li
        className="sideBarItem"
        onClick={() => {
          props.action("background");
        }}
      >
        <h1>Background</h1> <img src={background} alt={"Projects"}></img>
      </li>
      <li
        className="sideBarItem"
        onClick={() => {
          props.action("experience");
        }}
      >
        <h1>Experience</h1> <img src={experience} alt={"Projects"}></img>
      </li>
      <li
        className="sideBarItem"
        onClick={() => {
          props.action("aboutSite");
        }}
      >
        <h1>About Site</h1> <img src={aboutSite} alt={"Projects"}></img>
      </li>
    </ul>
  );
}
