import React from 'react';
import IntAPI from '../../utils/InternalAPI';
import ExtAPI from '../../utils/ExternalAPI';
import SearchField from './SearchField/SearchField';
import SearchResults from './SearchResults/SearchResults';
import './SearchBooks.css';

class SearchBooks extends React.Component {
    state = {
        books: []
    };

    searchBooks = event => {
        event.preventDefault();

        ExtAPI.getBook(event.target.query.value)
            .then(res => {
                let resBooks = [];

                res.data.items.forEach(book => {
                    resBooks.push(this.extractBookInfo(book));
                });

                this.setState({ books: resBooks });
            })
    }

    extractBookInfo = ({ volumeInfo: { title, authors, description, imageLinks, previewLink } }) => {
        const image = imageLinks ? imageLinks.thumbnail : '';

        return {
            title: title || 'Unknown',
            authors: authors || ['Unknown'],
            description: description || 'None',
            image: image,
            link: previewLink || ''
        }
    }

    saveBook = event => {
        event.preventDefault();

        const { title, authors, description, image, link } = event.target.dataset;

        const body = {
            title: title,
            authors: authors.split(','),
            description: description,
            image: image,
            link: link
        }

        IntAPI.addBook(body);
    }

    render() {
        return (
            <div className='SearchBooks'>
                <SearchField searchBooks={this.searchBooks} />
                <SearchResults books={this.state.books} saveBook={this.saveBook} />
            </div>
        );
    };
}

export default SearchBooks;
