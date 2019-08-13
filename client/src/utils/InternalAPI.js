import axios from 'axios';

export default {
  getBooks: function() {
    return axios.get('/api/books');
  },
  deleteBook: function(id) {
    return axios.delete('/api/books/' + id);
  },
  addBook: function(bookData) {
    return axios.post('/api/books', bookData);
  }
};
