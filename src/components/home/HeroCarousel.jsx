import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  NavLink,
} from "reactstrap";

export default function HeroCarousel(props) {
  const { slides } = props.data;
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const newSlides = slides.map((item) => {
    return (
      <CarouselItem
        key={item.key}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <div className="flex items-center justify-left relative ">
          <div className="w-full">
            <img
              className="w-full h-screen object-cover"
              src={item.src}
              alt={item.altText}
            />
          </div>
          <div className="flex flex-col gap-10 my-9 ml-[1%] sm:ml-[15%] absolute collection-text">
            <h5 className="text-[16px] font-bold text-white ">{item.h5}</h5>
            <h1 className="text-[58px] font-bold text-white leading-[80px]">
              {item.h1}
            </h1>
            <div>
              <h4 className="text-[20px] font-weight text-[#FAFAFA]">
                {item.h4}
              </h4>
              <h6 className="text-[20px] font-weight text-[#FAFAFA]">
                {item.h6}
              </h6>
            </div>
            <Link to="/shop">
              <button className="carousel-button hover:bg-white hover:text-[#2DC071]">
                SHOP NOW
              </button>
            </Link>
          </div>
          <div></div>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={slides}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {newSlides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}
