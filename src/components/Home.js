import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import SearchForm from './modal/SearchForm';

const Home = () => {
  // Define state variables for carousel content
  const [carouselItems, setCarouselItems] = useState([
    {
      id: 1,
      title: 'Create your beautiful website with MDBootstrap',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!',
      imageUrl: 'https://mdbootstrap.com/img/Photos/Others/gradient12.webp',
    },
    // Add more carousel items as needed
    {
        id: 2,
        title: 'Create your beautiful website with MDBootstrap',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem, optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!',
        imageUrl: 'https://mdbootstrap.com/img/Photos/Others/gradient12.webp',
      },
  ]);

  return (
    <Carousel>
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
            <SearchForm />
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Home;
