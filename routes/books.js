const express = require("express");
const Book = require("../models/book");
const Author = require("../models/author");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("All books");
});

router.get("/new", async (req, res) => {
  try {
    const authors = await Author.find({});
    console.log(authors);
    const book = new Book();
    res.render("books/new", {
      authors,
      book,
    });
  } catch (err) {
    res.redirect("/books");
  }
});

router.post("/", async (req, res) => {
  res.send("create books");
});

module.exports = router;
