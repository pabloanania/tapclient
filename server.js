const express = require('express');
const bodyParser = require('body-parser');

const app = express();


// parse body as json
app.use(bodyParser.json());

// all requests
app.use((req, res, next) => {
    console.log(`${req.method}: ${req.path}`);

    next();
});

// get home
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

// devuelve archivos del servidor
app.get(['/libs/*', '/css/*', '/ico/*', '/js/*' ,'/img/*'], (req, res) => {
    res.sendFile(__dirname + req.originalUrl);
});

// Inicia servidor
app.listen(process.env.PORT || 5000, function () {
    console.log('APP funcionando con express...');
});