// Jumbotron.js
import React from 'react';

const Jumbotron = () => {
  return (
    <div className="jumbotron card card-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/gradient12.webp)'}}>
      <div className="text-white text-center py-5 px-4">
        <div>
          <h2 className="card-title h1-responsive pt-3 mb-5 font-bold"><strong>Create your beautiful website with MDBootstrap</strong></h2>
          <p className="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
            optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
