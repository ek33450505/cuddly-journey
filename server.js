// Import the mysql2 package and connect to the MySQL database
const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // My MySQL username
        user: 'root',
        // My MySQL password
        password: 'VanLouis15!',
        database: 'election3'
    },
    console.log('Connected to the election3 database.')
);

// Test the express.js connection (only used to test connection before proceeding!)
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World, my name is Ed!'
//     });
// });

// Show all candidates 
// db.query(`SELECT * FROM candidates2`, (err, rows) => {
//     console.log(rows);
// });

// GET a single candidate
// db.query(`SELECT * FROM candidates2 WHERE id = 1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// Delete a candidate
// db.query(`DELETE FROM candidates2 WHERE id = ?`, 10, (err, results) => {
//     if (err) {
//     console.log(err);
//     }
//     console.log(results)
// });

// Create a candidate
// const sql = `INSERT INTO candidates2 (id, first_name, last_name, industry_connected) 
//               VALUES (?,?,?,?)`;

// const params = [10, 'Unica', 'Zurn', 1];

// db.query(sql, params, (err, results) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(results)
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// function to start Express.js server on Port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

