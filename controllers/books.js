const asyncHandler = require("express-async-handler");
const Book = require("../model/Book");
const User = require("../model/User");

// @description  Get Public Books
// @routes       GET /public
// @access       Private
const getPublic = asyncHandler(async (req, res) => {
  const books = await Book.find({ access: "Public", user: req.user.id });
  
  if (!books) {
    res.status(400).json({ message: "Book Not Found" });
  }

  res.send(books);
});

// @description  Get Private Books
// @routes       GET /private
// @access       Private
const getPrivate = asyncHandler(async (req, res) => {
  const books = await Book.find({ access: "Private", user: req.user.id  });

  if (!books) {
    res.status(400).json({ message: "Book Not Found" });
  }

  res.status(200).send(books)
});

// @description  Get my Books
// @routes      GET /bookshelf
// @access       Private
const bookshelf = asyncHandler(async (req, res) => {
  const books = await Book.find({user: req.user.id});
  
  if (!books) {
    res.status(400).json({ message: "Books not found" });
  }
  
  res.status(200).json({books});
});

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

// @description  Edit Book
// @routes       PUT /edit/:bookId
// @access       Private


// @description  Delete Book
// @ routes      Delete /del/:bookId
// @access       Private


module.exports = {
    getPublic, getPrivate, bookshelf,
    addBook
};