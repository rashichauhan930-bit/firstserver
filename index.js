const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World! My first server is running.');
});

app.get('/about', (req, res) => {
    res.send('This is the About page.');
});

app.get('/contact', (req, res) => {
    res.send('This is the Contact page.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});