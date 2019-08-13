import React from 'react';
import './Book.css';

function Book({ book, deleteBook }) {
    return (
        <div className="Book row">
            <img src={book.image} alt="" className="col-1" />
            <div className="col-11" name="bookData">
                <div className="Book-property">{`Title: ${book.title}`}</div>
                <div className="Book-property">{`Author(s): ${book.authors.join(', ')}`}</div>
                <div className="Book-property">{`Description: ${book.description}`}</div>
                <br />
                <div className="Book-property Book-link">
                    <a href={book.link} target="_blank" rel="noopener noreferrer">{`Google Books preview`}</a>
                </div>

                <button
                    onClick={deleteBook}
                    data-id={book._id}
                    className="Book-submit btn btn-danger"
                >
                    ✗
                </button>
            </div>
        </div>
    );
}

export default Book;
