const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server.config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text());

app.get('/ping', (req, res) =>{
    return res.json({message: 'Problem Service Is Alive'})
})

app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`)
});