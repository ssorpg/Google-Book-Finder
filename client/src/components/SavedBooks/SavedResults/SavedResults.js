import React from 'react';
import Book from './Book/Book';
import './SavedResults.css';

function SavedResults({ books, deleteBook }) {
    return (
        <section className="SavedResults">
            <h2>Saved Books</h2>
            {
                books
                    ? books.map((book, id) => {
                        return (
                            <Book book={book} deleteBook={deleteBook} key={id} />
                        );
                    })
                    : ''
            }
        </section>
    );
}

export default SavedResults;
