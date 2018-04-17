import React from "react";
import "./Header.css";

const Header = (props) => (
  <div className="container">
    <nav className="navbar fixed-top header" >
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
    <div className="jumbotron jumbo">
      <h1 className="subheader">Water and Guzzlelean</h1>
      <p className="subheader">DO NOT EVEN CLICK ON THE SAME FACE!!!</p>
    </div>
  </div>
);

export default Header;
