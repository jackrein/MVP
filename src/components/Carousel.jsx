import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

const ControlledCarousel = ({ pics }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const changeSlide = (e) => {
    if (e.target.value < 1) {handleSelect(0)}
    else if (e.target.value < 3) {handleSelect(1)}
    else if (e.target.value < 5) {handleSelect(2)}
    else if (e.target.value < 11) {handleSelect(3)}
    else if (e.target.value < 17) {handleSelect(4)}
    else if (e.target.value < 27) {handleSelect(5)}
    else if (e.target.value < 33) {handleSelect(6)}
    else if (e.target.value < 37) {handleSelect(7)}
    else if (e.target.value < 42) {handleSelect(8)}
    else if (e.target.value < 45) {handleSelect(9)}
    else if (e.target.value < 56) {handleSelect(10)}
    else if (e.target.value < 69) {handleSelect(11)}
    else {handleSelect(12)}
  };

  const slides = pics.map(pic =>
    <Carousel.Item key={pic.photo_id}>
      <Image className="d-block w-100" src={pic.url} alt={pic.date} fluid />
      <Carousel.Caption>
        <p>Time on T: {pic.t_time} &nbsp; ({pic.date})</p>
      </Carousel.Caption>
    </Carousel.Item>
  );

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {slides}
        <span className="carousel-control-prev" role="button" onClick={() => setIndex(index - 1)}>
          <span aria-hidden="true" className="carousel-control-prev-icon"></span>
          <span className="sr-only">Previous</span>
        </span>
        <span className="carousel-control-next" role="button" onClick={() => setIndex(index + 1)}>
          <span aria-hidden="true" className="carousel-control-next-icon"></span>
          <span className="sr-only">Next</span>
        </span>
      </Carousel>
      <div className="slidecontainer">
        <input type="range" min="0" max="70" defaultValue="0" id="slider" onChange={changeSlide}/>
        <label for="slider">0</label><label for="slider" className="align-right">70</label>
        <p>Months on T </p>
      </div>
    </div>
  );
};

export default ControlledCarousel;
