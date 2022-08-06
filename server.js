const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Test the express.js connection (only used to test connection before proceeding!)
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World, my name is Ed!'
//     });
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// function to start Express.js server on Port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

