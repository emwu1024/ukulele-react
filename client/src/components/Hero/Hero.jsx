import React from "react";
import Carousel, { CarouselItem } from "../Carousel/Carousel";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section>
        <div className="hero-container">
          <div className="hero-content">
            <Carousel>
              <CarouselItem
                itemNumber="first"
                title="Ukulele Repo"
                // caption="A hub for all things ukulele"
                caption="Want to log your songs for the session? Check out our song list maker here!"
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
      </section>
    </>
  );
};

export default Hero;
