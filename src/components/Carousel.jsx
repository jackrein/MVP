import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

const ControlledCarousel = ({ currentPic, clickPrev, clickNext }) => {
  return (
    <div>
      <Carousel>
          <Carousel.Item>
            <Image src={currentPic.url} alt={currentPic.date} fluid />
            <Carousel.Caption>
              <p>{currentPic.date}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <a className="carousel-control-prev" role="button" href="#" onClick={clickPrev}>
            <span aria-hidden="true" className="carousel-control-prev-icon"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" role="button" href="#" onClick={clickNext}>
            <span aria-hidden="true" className="carousel-control-next-icon"></span>
            <span className="sr-only">Next</span>
          </a>
      </Carousel>
    </div>
  );
};

export default ControlledCarousel;