import React from 'react';
import { Carousel } from 'react-bootstrap';

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
          <h2 className="card-title h1-responsive pt-3 mb-5 font-bold"><strong>Create your beautiful website with MDBootstrap</strong></h2>
          <p className="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
            optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
          </p>
          {/* Search form */}
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form className="form-inline">
                <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-white btn-sm" type="submit"><i className="fas fa-search"></i></button>
              </form>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add more Carousel.Items as needed */}
    </Carousel>
  );
};

export default Home;

