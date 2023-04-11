const asyncHandler = require("express-async-handler");
const Book = require("../model/Book");
const User = require("../model/User");

// @description  Add my Book
// @routes       POST /addBook
// @access       Private
const addBook = asyncHandler(async (req, res) => {
  const { title, author, access, rating, description, ISBN, category  } = req.body;
  
  if (!title || !author || !access || !description || !ISBN || !category || !rating ) {
    res.status(400).json({ message: "Please add all Book fields" });
  }
    const book = await Book.create({
      user: req.user.id,
      title:title,
      access:access,
      author:author,
      description:description,
      rating: rating,
      ISBN:ISBN,
      category: category,
    });
    res.status(200).json({book})
  }
);

module.exports = {
    addBook
};
