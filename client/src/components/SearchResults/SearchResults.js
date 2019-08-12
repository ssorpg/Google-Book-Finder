import React from 'react';
import Book from './Book/Book';
import './SearchResults.css';

function SearchResults({ books }) {
    return (
        <section className="SearchResults">
            <h2>Search Results</h2>
            {
                books
                    ? books.map((book, id) => {
                        return (
                            <Book book={book} key={id}></Book>
                        );
                    })
                    : ''
            }
        </section>
    );
}

export default SearchResults;
