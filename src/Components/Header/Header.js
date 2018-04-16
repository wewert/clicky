import React from "react";
import "./Header.css";

const Header = (props) => (
  <div className="container">
    <nav className="navbar fixed-top navy" >
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <span className="nav-link active" >The Road That Is Furious Clicky Game</span>
        </li>
        <li className="nav-item">
          <span className="nav-link" >Score: {props.score} </span>
        </li>
        <li className="nav-item">
          <span className="nav-link disabled" >Highest Score Mate: {props.highScore}</span>
        </li>
        <li className="nav-item">
          <p className="nav-link disabled" >{props.text}</p>
        </li>
      </ul>
    </nav>
    <div className="jumbotron aboutGame">
      <h1 className="blue">Water and Guzzlelean</h1>
      <p className="lead blue">DO NOT EVEN CLICK ON THE SAME FACE!!!</p>
    </div>
  </div>
);

export default Header;
