import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';

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
            className="custom-tag"
            key={item.key}
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
          >
            <div>
                <div>
                    <img src={item.src}/>
                </div>
                <div>
                    <h5>{item.h5}</h5>
                    <h1>{item.h6}</h1>
                    <h4>{item.h4}</h4>
                    <button>SHOP NOW</button>
                </div>
            </div>
          </CarouselItem>
        );
      });

      return (
          <Carousel 
            activeIndex={activeIndex} 
            next={next} 
            previous={previous}>
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




