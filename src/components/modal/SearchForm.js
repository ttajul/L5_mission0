// SearchForm.js
import React from 'react';

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <form className="form-inline" onSubmit={handleSubmit}>
          <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-white btn-sm" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
