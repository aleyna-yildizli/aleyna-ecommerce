import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

export default function BottomCarousel(props) {
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
        <div className="flex flex-row justify-between items-center bg-[#23856D] collection-text2 h-[850px] sm:h-[711px] pb-96 sm:pb-1 carousel-item2 ">
          <div className="flex flex-col gap-4 sm:ml-[15%] ml-[5%]  absolute basis-1/2 ">
            <h5 className="text-[12px] sm:text-[16px] font-bold text-white ">
              {item.h5}
            </h5>
            <div className="w-[300px] sm:w-[400px]">
              <h1 className="text-[40px] sm:text-[58px] font-bold text-white leading-[80px]">
                {item.h1}
              </h1>
            </div>
            <div className="w-[300px] sm:w-[400px]">
              <h4 className="text-[14px] sm:text-[20px] font-weight text-white">
                {item.h4}
              </h4>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <h5 className="text-white text-2xl font-bold pr-5 pt-1">
                {item.price}
              </h5>
              <button className="text-[16px] sm:text-[24px] font-bold text-white bg-[#2DC081] rounded-[5px] py-2 px-2 w-[50%]">
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="">
            <img className=" " src={item.src} alt={item.altText} />
          </div>
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
