import axios from "axios";

export default {
  getBooks: function() {
    return axios.get("/api/books");
  },
  getBook: function(title) {
    return axios.get("/api/books/" + title);
  }
};
