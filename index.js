const express = require('express');

const app = express();

app.get('/teste2', (req, res) => res.json({ message: 'Hello Git/Github' }));

app.listen(3333);
