import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ControlledCarousel = ({ photos, currentPic }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
         {console.log('photos: ', photos)}
         <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://selfieline.s3.us-east-2.amazonaws.com/2014_07_06.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://selfieline.s3.us-east-2.amazonaws.com/2014_07_06.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://selfieline.s3.us-east-2.amazonaws.com/2014_11_27.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;