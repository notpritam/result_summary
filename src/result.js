import React from "react";
import "./styles.css";

export default function Result() {
  return (
    <div className="card result">
      <p className="head">Your Result</p>
      <div className="circle">
        <h1>76</h1>
        <p>of 100</p>
      </div>
      <div className="last-result">
        <p>Great</p>
        <p className="des">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}
