const express = require('express');


const app = express();

app.listen(4000,() => {
    console.log('Server is running on port 4000');
})

app.get('/', (req, res) => {
    res.send({
        msg: "You are in home directory"
    })
})

app.get('/login', (req, res) => {
    res.send({ msg : "This is login Page"});
})