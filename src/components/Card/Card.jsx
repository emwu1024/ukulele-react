import React from "react";
import "./Card.css";
import Button from "../Buttons/Button/Button";

const Card = () => {
  return (
    <>
      <h1 className="page-title">Don't Know Where To Start?</h1>
      <div className="beginner-container">
        <div className="beginner-card">
          <h2 className="card-title">Beginner Songs</h2>
          <p className="card-caption">
            These songs are a great starting point for beginners!
          </p>
          <div className="card-btn">
            <Button
              className="card-btn"
              name="Let's Go"
              route="/songs"
            ></Button>
          </div>
          {/* <button>Let's Go</button> */}
        </div>
        <div className="beginner-card">
          <h2 className="card-title">Songs of the Week</h2>
          <p className="card-caption">Check out the songs of the week!</p>
          <div className="card-btn">
            <Button
              className="card-btn"
              name="Let's Go"
              route="/songs"
            ></Button>
          </div>
          {/* <button>Let's Go</button> */}
        </div>
      </div>
    </>
  );
};

export default Card;
