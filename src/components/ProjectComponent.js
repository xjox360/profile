import React from "react";

export default function ProjectComponent(props) {
  return (
    <div className="projectComponent">
      <h1>{props.name}</h1>
      <img src={props.image} alt={props.name}></img>
      <p>{props.description}</p>
    </div>
  );
}
