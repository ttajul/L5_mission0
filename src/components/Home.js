import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import SearchForm from './modal/SearchForm';

const Home = () => {
  // Define state variables for carousel content
  const [carouselItems, setCarouselItems] = useState([
    {
      id: 1,
      title: 'Al-Haitham',
      description: 'Sumeru Scribe',
      imageUrl: 'https://genshin.global/wp-content/uploads/2023/02/alhaitham-official-desktop-wallpaper-genshin-1200x675.jpg',
    },
    // Add more carousel items as needed
    {
      id: 2,
      title: 'Ganyu',
      description: 'Liyue Adeptus',
      imageUrl: 'https://genshin.global/wp-content/uploads/2022/06/ganyu-hoyolab-official-desktop-wallpaper-genshin-1200x675.jpg',
    },
    {
      id: 3,
      title: 'Zhongli',
      description: 'Liyue Archon',
      imageUrl: 'https://genshin.global/wp-content/uploads/2023/12/ancient-treasures-zhongli-event-official-wallpaper-1200x675.jpg'},
  ]);

  // Define state variable for active carousel item
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div style={{ position: 'relative' }}>
      <Carousel activeIndex={activeItem} onSelect={(index) => setActiveItem(index)}>
        {carouselItems.map(item => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.imageUrl}
              alt="Slide"
            />
            <Carousel.Caption>
              <h2 className="card-title h1-responsive pt-3 mb-5 font-bold">
                <strong>{item.title}</strong>
              </h2>
              <p className="mx-5 mb-5">{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="position-absolute bottom-0 start-50 translate-middle-x">
        <SearchForm />
      </div>
    </div>
  );
};

export default Home;

