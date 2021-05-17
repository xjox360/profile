import React from "react";
import loading from "../Images/loading.png";

export default function LoadingBox() {
  return (
    <div className="logo-container-big">
      <img src={loading} alt="logo" />
      <h1>loading...</h1>
    </div>
  );
}
