import express from 'express';
import bodyParser from 'body-parser';
import connectMongo from './config/dbConnection.js';
import Routes from './routes/index.js';

const app = express();

connectMongo();

app.use(bodyParser.json({
    limit: '10000kb'
}))
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(Routes)
app.use(function(req, res, next) {
    res.status(404).send({message: "No matching route please check..."});
    return
})


export default app;