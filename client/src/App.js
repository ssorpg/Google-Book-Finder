import React from 'react';
import API from "./utils/API";
import Header from './components/Header/Header';
import SearchField from './components/SearchField/SearchField';
import SearchResults from './components/SearchResults/SearchResults';
import './App.css';

class App extends React.Component {
  state = {
    books: []
  };

  componentDidMount = () => {
    API.getBooks()
      .then(res => {
        this.setState({ books: res.data })
      })
  }

  searchBooks = event => {
    event.preventDefault();

    API.getBook(event.target.value)
      .then(res => {
        this.setState({ books: res.data })
      })
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <SearchField searchBooks={this.searchBooks}></SearchField>
        <SearchResults books={this.state.books}></SearchResults>
      </div>
    );
  };
}

export default App;
