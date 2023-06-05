import React from "react";
import "./Card.css";

const Hero = () => {
  return (
    <>
      {/* Beginner Songs  */}
      <div className="beginner">
        <h1>Beginner Songs</h1>
        <div className="beginner-container">
          <div className="beginner-card">
            <h2>New to Ukulele?</h2>
            <p>These songs are a great starting point for beginners!</p>
            <button>Let's Go</button>
          </div>
          <div className="beginner-card">
            <h2>Want more songs?</h2>
            <p>Check out our archive!</p>
            <button>Let's Go</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
