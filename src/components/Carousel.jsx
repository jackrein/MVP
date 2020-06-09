import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

const ControlledCarousel = ({ photos, currentPic }) => {
  if (currentPic === undefined) {
    console.log(photos[0]);
    return currentPic = photos[0]
  }
  return (
    <div>
      <Carousel>
          <Carousel.Item>
            <Image src={currentPic.url} alt={currentPic.date} fluid />
            <Carousel.Caption>
              <p>Time on T: {currentPic.t_time} &nbsp;&nbsp; ({currentPic.date})</p>
            </Carousel.Caption>
          </Carousel.Item>

      </Carousel>
    </div>
  );
};

export default ControlledCarousel;