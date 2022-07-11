const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const images = require('./modules/images')
app.set('view engine', 'ejs');


const path = require("path");

const publicDirectoryPath = path.join(__dirname, "./public");



app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {

res.render("index",{imagesArray: images});
});


app.listen(PORT, () => {

console.log("Server is up on port "+PORT);
});