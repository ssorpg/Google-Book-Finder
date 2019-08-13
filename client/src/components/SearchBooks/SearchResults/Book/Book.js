import React from 'react';
import './Book.css';

function Book({ book, saveBook }) {
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
                    onClick={saveBook}
                    data-image={book.image}
                    data-title={book.title}
                    data-authors={book.authors}
                    data-description={book.description}
                    data-link={book.link}
                    className="Book-submit btn btn-info"
                >
                    Save
                </button>
            </div>
        </div>
    );
}

export default Book;
