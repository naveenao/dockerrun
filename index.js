const express = require('express');

const app = express();

app.get('/',(req, res) => {
    res.send('Latest update from docker hub. Run check from yaml file. Hi Naveen!!Welcome to the jungle');
});

app.listen(8082, () => {
    console.log("Listening on port 8082");
});