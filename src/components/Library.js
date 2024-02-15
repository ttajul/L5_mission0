import React from 'react';

const Library = () => {
  const images = [
    {
      id: 1,
      src: 'image1.jpg',
    },
    {
      id: 2,
      src: 'image2.jpg',
    },
    {
      id: 3,
      src: 'image3.jpg',
    }
  ];

  return (
    <div>
      {images.map(image => (
        <img className='img-thumbnail' key={image.id}  src={image.src} alt={`Image ${image.id}`} />
      ))}
    </div>
  );
};

export default Library;
