import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

const ControlledCarousel = ({ photos, currentPic }) => {
  return (
    <div>
      <Carousel>
          {console.log('photos: ', photos)}
          {photos.map(photo => (
            <Carousel.Item key={photo.photo_id}>
              <Image src={photo.url} alt={photo.date} fluid />
              <Carousel.Caption>
                <p>Time on T: {photo.t_time} &nbsp; ({photo.date})</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

export default ControlledCarousel;