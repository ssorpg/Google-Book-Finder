import axios from "axios";

export default {
  getBook: function(title) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + encodeURIComponent(title));
  }
};
