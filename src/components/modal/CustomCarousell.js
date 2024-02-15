// Carousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';

const CustomCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mdbootstrap.com/img/Photos/Others/gradient12.webp"
          alt="First slide"
        />
        <Carousel.Caption>
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

export default CustomCarousel;
