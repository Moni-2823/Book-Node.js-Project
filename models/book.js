import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
    
}, 
{
    timestamps: true
}
)

const Book = mongoose.model("book", bookSchema);

export default Book;