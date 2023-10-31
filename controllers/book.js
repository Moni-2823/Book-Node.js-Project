import Book from '../models/book.js';

const addBook = async (req, res) => {
    try {
        let isBookExist = await Book.findOne({title: req.body.title});
        if(isBookExist) {
            return res.status(400).send({message: 'Book title already exist '});
        }
        let saveBook = await new Book(req.body).save();
        res.status(201).send({data: saveBook});
    } catch(err) {
        res.status(500).send({error: err});
    }
}

const getBookList = async (req, res) => {
    try{
        let bookList = await Book.find();
        if(!bookList) {
            res.status(404).send({message: 'book list not found'});
        }
        res.status(200).send({data: bookList});
    } catch(error) {
        res.status(500).send({error: error});
    }
}

const getBookById = async (req, res) => {
    try{
        let bookList = await Book.findOne({_id: req.body.id});
        if(!bookList) {
            res.status(404).send({message: 'book list not found'});
        }
        res.status(200).send({data: bookList});
    } catch(error) {
        res.status(500).send({error: error});
    }
}
const updateBookList = async (req, res) => {
    try{
        let isBookExist = await Book.findOne({_id: req.body.id});
        if(!isBookExist) {
            res.status(404).send({message: "book not found with this id"});
        }
        let updateBook = await Book.findOneAndUpdate({_id: req.body.id},{$set: req.body},{new: true})
        if(!updateBook) {
            res.status(400).send({message: 'data not updated'})
        }
        res.status(200).send({message: "data updated successfully"});
    } catch(error) {
        res.status(500).send({error: error});
    }
}
const deleteBookList = async (req, res) => {
    try{
        let isBookExist = await Book.findOne({_id: req.body.id});
        if(!isBookExist) {
            res.status(404).send({message: "book not found with this id"});
        }
        let deleteBook = await Book.findOneAndRemove({_id: req.body.id})
        if(!deleteBook) {
            res.status(400).send({message: 'book not deleted'})
        }
        res.status(200).send({message: "book deleted successfully"});
    } catch(error) {
        res.status(500).send({error: error});
    }
}

export default {
    addBook, 
    getBookList,
    getBookById,
    updateBookList,
    deleteBookList
};