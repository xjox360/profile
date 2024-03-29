import React from "react";
import photo from "../Images/profile.jpg";

export default function AboutMeScreen() {
  return (
    <div>
      <h1 className="beautyTitle">About Me</h1>
      <section className="cardContainer">
        <div className="gridAbout">
          <img src={photo} className="profilePhoto" alt="Photo" />
          <h3>
            Jhon Alexander Gomez Pedraza <br /> jhongomez360@gmail.com
            <br />
            <a href="https://www.linkedin.com/in/jhon-alexander-gomez-pedraza-737206119/">
              {" "}
              Linkedin Profile
            </a>
            <br />
            @xjox360
          </h3>
        </div>
        <p>
          <b style={{ fontSize: 30 }}>C</b>reative, troubleshooter, recursive
          and curious, some words that define to myself. Experienced data
          analyst, 3+ years analyzing data and processes in retail and food
          industry, enhancing decision-making through the correct treatment of
          data and KPIs.
        </p>
        <p>
          I have a degree in Industrial Engineering and I'm a Python/JavaScript
          programmer focused on data analysis, plotting data and algorithms
          design, in addition to managing relational databases (sql), advanced
          Microsoft Excel (VBA), Google Sheets and Google App Script
          (Javascript).
        </p>
        <p>
          I have always been highlighted by my proactivity and solving problems
          approach, passionate about studying and learning every day, improving
          my skills continuously seeking to develop and implement productive,
          scalable, accurate and innovative solutions.
        </p>
        <p>
          And that's not all, I love web development, I've developed both work
          and personal projects using technologies like React JS, Redux, CSS,
          JavaScript, HTML for frontend, and Node.js and MySQL for backend.
        </p>
        <p>In short, I enjoy what I do, I enjoy the technology.</p>
        <p>
          <b>Keywords: </b> Data, Analyst, developer, development, SQL, MySQL,
          Databases, Python, Excel, Pandas, Matplotlib, algorithms, Query,
          Software, Google Suite, SQLite, ML, Machine Learning, Data Patterns,
          Models, Software Development, React js, React Native, Node.js, Redux,
          HTML, CSS.
        </p>
      </section>
    </div>
  );
}
