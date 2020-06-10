import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

const ControlledCarousel = ({ currentPic }) => {
  return (
    <div>
      <Carousel>
          <Carousel.Item>
            <Image src={currentPic.url} alt={currentPic.date} fluid />
            <Carousel.Caption>
              <p>{currentPic.date}</p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ControlledCarousel;