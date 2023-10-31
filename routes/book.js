import express from 'express';
import book from '../controllers/book.js';

const router = express.Router();

router.route('/addBook').post(book.addBook);
router.route('/getAllBookList').get(book.getBookList);
router.route('/getBookById').get(book.getBookById);
router.route('/updateBook').patch(book.updateBookList);
router.route('/deleteBook').delete(book.deleteBookList);

export default router;