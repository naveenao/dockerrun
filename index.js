const express = require('express');

const app = express();

app.get('/',(req, res) => {
    res.send('Welcome to the jungle');
});

app.listen(8082, () => {
    console.log("Listening on port 8082");
});