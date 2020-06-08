import React from 'react';

const Photo = ({photo}) => (
  <div>
    <img className="d-block w-100" src={photo.url} alt={photo.date} />
  </div>
)

export default Photo;