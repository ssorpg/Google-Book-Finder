import React from 'react';
import './SearchField.css';

function SearchField({ searchBooks }) {
  return (
    <section className="SearchField">
      <form className="SearchField-form" onSubmit={searchBooks}>
        <h2>Book Search</h2>
        <div className="form-group">
          <label htmlFor="query" className="SearchField-label">Book name</label>
          <input type="text" name="query" className="form-control" id="query" placeholder="Harry Potter" />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </section>
  );
}

export default SearchField;
