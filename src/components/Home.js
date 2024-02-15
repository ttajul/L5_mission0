import React from 'react';
import { Carousel } from 'react-bootstrap';
import SearchForm from './modal/SearchForm';

const Home = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mdbootstrap.com/img/Photos/Others/gradient12.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className="card-title h1-responsive pt-3 mb-5 font-bold">
            <strong>Create your beautiful website with MDBootstrap</strong>
          </h2>
          <p className="mx-5 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
            optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
          </p>
          <SearchForm />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;

