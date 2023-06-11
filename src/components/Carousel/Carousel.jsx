import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./Carousel.css";
import InteractiveButton from "../Buttons/InteractiveButton/InteractiveButton";

export const CarouselItem = (props) => {
  return (
    <div className={"carousel-item " + props.itemNumber}>
      <div className="carousel-text">
        <h1 className="carousel-title">{props.title}</h1>
        <hr className="carousel-hr" />
        <p className="carousel-caption">{props.caption}</p>
        {console.log(typeof props.caption)}
        <InteractiveButton
          name="Let's Go"
          route={props.route}
        ></InteractiveButton>
        {/* {props.children} */}
      </div>
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    const childrenCount = children.length;
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= childrenCount) {
      newIndex = childrenCount - 1;
    }
    setActiveIndex(newIndex);
  };

  const goToPrev = () => {
    updateIndex(activeIndex - 1);
  };

  const goToNext = () => {
    updateIndex(activeIndex + 1);
  };

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="btn-container">
        <button className="prev" onClick={goToPrev}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            size="2xl"
            style={{ color: "#fae7cd" }}
          />
        </button>

        <div className="indicators">
          {React.Children.map(children, (child, index) => {
            return (
              <button
                className={
                  `${index === activeIndex ? "active" : ""}` + " progress"
                }
                onClick={() => {
                  updateIndex(index);
                }}
                key={index}
              ></button>
            );
          })}
        </div>

        <button className="next" onClick={goToNext}>
          <FontAwesomeIcon
            icon={faChevronRight}
            size="2xl"
            style={{ color: "#fae7cd" }}
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
