import exp from 'constants';
import mongoose, { mongo } from 'mongoose';

const dbUrl = "mongodb://127.0.0.1/book";

function connectMongo() {
    try {
        mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            socketTimeoutMS: 10000
        })
        mongoose.connection.on('connected', () => {
            console.log('database connected');
        })
        mongoose.connection.on('disconnected', () => {
            console.log('database disconnected');
        })
        mongoose.connection.on('error', () => {
            console.log('database connection error',error);
        })
        } catch(error) {
        console.log('Database connection error::',error);
    }
}
export default connectMongo;