const express = require('express');
const db = require('./index'); // Your database connection module
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors({
    origin:"http://localhost:3000/"
}));


// Define API routes
app.get('/api/data', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  db.query('SELECT * FROM products', (err, result) => {
    if (err) {
      res.send('Error executing query:');
    } 
    else {
      res.send(result);
    }
  });
});

app.listen(5000);