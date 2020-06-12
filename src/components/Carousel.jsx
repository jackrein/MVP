import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

const ControlledCarousel = ({ currentPic, slides }) => {
  // const [index, setIndex] = useState(0);

  // Next/previous controls
  // const changeSlide = (direction) => {
  //   const [min, max] = [0, slides.length - 1]
  //   if (direction === 'prev') {setIndex-=1}
  //   else {index+=1};
  // }

  return (
    <div>
      <Carousel activeIndex={index}>
        <Carousel.Item>
          <Image className="d-block w-100" src={currentPic.url} alt={currentPic.date} fluid />
          <Carousel.Caption>
            <p>{currentPic.date}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ControlledCarousel;

        // <a className="carousel-control-prev" role="button" onClick={() => setIndex(index - 1)}>
        //   <span aria-hidden="true" className="carousel-control-prev-icon"></span>
        //   <span className="sr-only">Previous</span>
        // </a>
        // <span className="carousel-control-next" role="button" onClick={() => setIndex(index + 1)}>
        //   <span aria-hidden="true" className="carousel-control-next-icon"></span>
        //   <span className="sr-only">Next</span>
        // </span>