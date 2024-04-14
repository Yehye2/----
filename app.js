const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse request body
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the page.html file as the default page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'page.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
