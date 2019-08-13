import React from 'react';
import IntAPI from '../../utils/InternalAPI';
import SavedResults from './SavedResults/SavedResults';
import './SavedBooks.css';

class SearchBooks extends React.Component {
    state = {
        books: []
    };

    componentDidMount = () => {
        this.loadBooks();
    }

    loadBooks = () => {
        IntAPI.getBooks()
            .then(res => {
                console.log(res);
                this.setState({ books: res.data });
            });
    }

    deleteBook = event => {
        event.preventDefault();

        IntAPI.deleteBook(event.target.dataset.id)
            .then(() => {
                this.loadBooks();
            });
    }

    render() {
        return (
            <div className='SavedBooks'>
                <SavedResults books={this.state.books} deleteBook={this.deleteBook} />
            </div>
        );
    };
}

export default SearchBooks;
