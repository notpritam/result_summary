import React from "react";
import "./styles.css";

export default function Summary({ data }) {
  return (
    <div className="card summary">
      <p className="head">Summary</p>
      {data.map((p) => (
        <div className="small-card" id={p.category}>
          <div className="min-card">
            <img src={p.icon} />
            <p>{p.category}</p>
          </div>
          <p className="text">
            <span className="score">{p.score}</span>/100
          </p>
        </div>
      ))}
      <button className="continue">Continue</button>
    </div>
  );
}
