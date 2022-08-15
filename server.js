const e = require("express");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

//EXPRESS.JS Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`SERVER now running on port ${PORT}`)
});