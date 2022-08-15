const mysql = require("mysql2");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

//EXPRESS.JS Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Connect to MySQL database
const db = mysql.createConnection({
    host: "localhost",
    // Your MySQL username
    user: "zjodachow@gmail.com",
    // Your MySQL password
    password: ""
})

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`SERVER now running on port ${PORT}`)
});