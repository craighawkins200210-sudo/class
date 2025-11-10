const express = require('express');
const app = express();

app.use(express.json());

app.get('/items', (req, res) => {
    res.send('GET request');
});

app.post('/items', (req, res) => {
    res.send('POST request');
});

app.put('/items/:id', (req, res) => {
    res.send('PUT request');
});

app.delete('/items/:id', (req, res) => {
    res.send('DELETE request');
});

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});