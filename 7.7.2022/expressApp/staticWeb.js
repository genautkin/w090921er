
const PORT = 3000;
const express = require("express");
const app = express();
const path = require("path");
const publicDirectoryPath = path.join(__dirname, "./static/public");

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
    res.render("index");
    });
    
app.listen(PORT, () => {
        console.log(`Server is up on port ${PORT}.`);
        });