const asyncHandler = require("express-async-handler");
const Book = require("../model/Book");

// @description  Get Public Books
// @routes       GET /public
// @access       Public
const publicBooks = asyncHandler(async (req, res) => {
    const books = await Book.find({ access: "Public" });
    
    if (!books) {
      res.status(400).json({ message: "Book Not Found" });
    }
  
    res.send(books);
});

module.exports = {
    publicBooks
}