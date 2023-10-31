import app from "./app.js";
let port = 4000;

app.listen(port, function (error) {
    if(error) {
        console.log('server connection error:::',error);
        return;
    }
    console.log(`server is on port ${port}`);
})