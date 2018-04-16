import React from "react";
import "./Card.css";

const Card = (props) => (
  <div>
  <div className="container">
  <div className="card">
      <div className="img-container">
          <img alt={props.name} src={props.image} onClick={() => props.clicking(props.id)}/>
      </div>
  </div>
  </div>
  </div>
)

export default Card;
