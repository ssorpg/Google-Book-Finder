const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/")
  .get(booksController.findAll);

router.route("/:title")
  .get(booksController.findByTitle);

module.exports = router;
