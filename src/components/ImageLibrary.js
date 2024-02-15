import React from 'react';
import styles from './ImageLibrary'

const ImageLibrary = () => {
  const images = [
    {
      id: 1,
    
      src: 'https://genshin.global/wp-content/uploads/2022/06/razor-electro-character-profile-card-genshin-impact-506x900.jpg',
    },
    {
      id: 2,
      src: 'https://genshin.global/wp-content/uploads/2022/05/sangonomiya-kokomi-profile-card-genshin-impact-450x800.jpg',
    },
    {
      id: 3,
      src: 'https://genshin.global/wp-content/uploads/2022/10/candace-character-profile-card-genshin-impact-506x900.jpg',
    },
    {
      id: 4,
      src: 'https://genshin.global/wp-content/uploads/2022/05/shenhe-character-profile-card-genshin-impact-450x800.jpg',
    },
    {
      id: 5,
      src: 'https://genshin.global/wp-content/uploads/2023/10/neuvillette-hydro-character-profile-card-genshin-450x900.jpg',
    },
    {
      id: 6,
      src: 'https://genshin.global/wp-content/uploads/2022/06/bennett-pyro-character-profile-card-genshin-impact-506x900.jpg',
    },
    {
      id: 7,
      src: 'https://genshin.global/wp-content/uploads/2020/09/diluc-pyro-character-profile-card-450x800.webp',
    },
    {
      id: 8,
      src: 'https://genshin.global/wp-content/uploads/2022/08/Tighnari-dendro-character-profile-card-genshin-impact-506x900.jpg',
    },
    {
      id: 9,
      src: 'https://genshin.global/wp-content/uploads/2022/05/ningguang-geo-character-profile-card-genshin-impact-450x800.jpg',
    }
  ];

  return (
    <div className="row">
    {images.map(image => (
      <div className="col-md-4" key={image.id}>
        <div className="thumbnail-container">
          <img className="img-thumbnail img-fluid" src={image.src} alt={`Image ${image.id}`} />
        </div>
      </div>
    ))}
  </div>
);
};

export default ImageLibrary;
