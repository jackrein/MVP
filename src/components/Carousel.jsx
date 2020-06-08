import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import Photo from './Photo';

const ControlledCarousel = () => {
  const [photo, setPhoto] = useState({ photos: [] });
  const [query, setQuery] = useState(4);

  useEffect(() => {
    const fetchPhoto = async () => {
      const result = await fetch(`http://localhost:5000/photos/${query}`);
      console.log(result);
      setPhoto(result.data);
    }
    fetchPhoto();
  }, [query]);

  const handleSelect = (selectedIndex, e) => {
    setPhoto(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={photo} onSelect={handleSelect}>
        {photo.photos.map(photo => (
          <Carousel.Item key={photo.photo_id}>
            <a href={photo.url}>{photo.date}</a>
          </Carousel.Item>
        ))}
        <a className="carousel-control-next" role="button" href="index.html" onClick={() => setPhoto(photo + 1)}>
          <span aria-hidden="true" className="carousel-control-next-icon"></span>
          <span className="sr-only">Next</span>
        </a>
      </Carousel>
      <input value={query} onChange={e => setQuery(e.target.value)} />
    </div>
  );
}

export default ControlledCarousel;