import React from "react";
import "./Header.css";

const Header = (props) => (
  <div className="container">
    <nav className="navbar fixed-top header" >
      <ul className="nav justify-content-end">
        <p className="nav-item">
        <h2 className="nav-link active" >What A Lovely Day!</h2>
          <h1 className="nav-link active" >The Road That Is Furious Clicky Game</h1>
        </p>
        <li className="nav-item">
          <span className="nav-link" >Score: {props.score} </span>
        </li>
        <li className="nav-item">
          <span className="nav-link disabled" >Highest Score Mate: {props.highScore}</span>
        </li>
        <li className="nav-item">
          <p className="nav-link disabled" >{props.text}</p>
        </li>
        <div className="jumbotron jumbo">
          <h1 className="subheader">DO NOT EVEN CLICK ON THE SAME FACE!!!</h1>
        </div>
      </ul>
    </nav>
  </div>
);

export default Header;
