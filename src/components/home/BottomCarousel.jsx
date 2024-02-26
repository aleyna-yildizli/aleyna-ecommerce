import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';

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
      <CarouselItem key={item.key} onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)}>
        <div className='flex flex-row justify-between items-center bg-[#23856D] collection-text h-[1350px] sm:h-[780px] '>
          <div className='flex flex-col gap-4 sm:ml-[15%] ml-[5%]  absolute basis-1/2 '>
            <h5 className='text-[16px] font-bold text-white '>{item.h5}</h5>
            <div className='w-[350px] sm:w-[400px]'>
              <h1 className='text-[58px] font-bold text-white leading-[80px]'>{item.h1} {item.h2}</h1>
            </div>
            <div className='w-[350px] sm:w-[400px]'>
              <h4 className='text-[20px] font-weight text-white'>{item.h4}{item.h6}</h4>
            </div>
            <div className='flex flex-col sm:flex-row items-center gap-2'>
              <h5 className='text-white text-2xl font-bold pr-5 pt-1'>{item.price}</h5>
              <button className='text-[24px] font-bold text-white bg-[#2DC081] rounded-[5px] py-2 px-2 w-[50%]'>ADD TO CART</button>
            </div>
          </div>
          <div className='ml-[100px] sm:ml-[900px] sm:mt-[100px] mt-[1100px] '>
            <img className=' sm:h-[680px] object-fit' src={item.src} alt={item.altText} />
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