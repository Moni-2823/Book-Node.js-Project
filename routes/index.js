import express from 'express';
import bookRoute from './book.js';

const router = express.Router();

router.use('/book',bookRoute);

export default router;