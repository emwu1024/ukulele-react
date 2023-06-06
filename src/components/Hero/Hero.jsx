import React from "react";
import Carousel, { CarouselItem } from "../Carousel/Carousel";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <header className="main">
        <div className="main-container">
          <div className="main-content">
            <Carousel>
              <CarouselItem
                itemNumber="first"
                title="Ukulele Repo"
                caption="A hub for all things ukulele"
                route="/profile"
              />
              <CarouselItem
                itemNumber="second"
                title="Take Me To The Songs"
                caption="Wanna belt out your favourite songs? You can find an anthology of chords here"
                route="/songs"
              />
              <CarouselItem
                itemNumber="third"
                title="Got a Ukulele Question?"
                caption="Fret not, you can find answers to questions you may have here!"
                route="/faq"
              />
            </Carousel>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;