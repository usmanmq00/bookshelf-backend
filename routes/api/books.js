const express = require("express");
const router = express.Router();
const { getPublic, getPrivate, bookshelf, addBook } = require("../../controllers/books");
const { protect } = require('../../middleware/auth');

router.get('/public', protect , getPublic);
router.get('/private', protect , getPrivate);
router.get("/bookshelf", protect, bookshelf);
router.post("/add", protect, addBook);
// router.put("/edit/:bookId", protect, editBook);
// router.delete("/del/:bookId", protect, deleteBook);

module.exports = router;