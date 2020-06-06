const express = require('express');

const app = express();

app.get('/', (request, response) => response.json({ message: 'Hello wordl' }));

app.listen(3333);