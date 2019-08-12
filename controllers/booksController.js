const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByTitle: function(req, res) {
    db.Book
      .find({ title: req.params.title })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
