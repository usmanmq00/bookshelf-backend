const express = require("express");
const router = express.Router();
const { getPublic, getPrivate, bookshelf, addBook, editBook, deleteBook } = require("../../controllers/books");
const { protect } = require('../../middleware/auth');

router.get('/public', protect , getPublic);
router.get('/private', protect , getPrivate);
router.get("/bookshelf", protect, bookshelf);
router.post("/add", protect, addBook);
router.put("/edit/:id", protect, editBook);
router.delete("/del/:id", protect, deleteBook);

module.exports = router;