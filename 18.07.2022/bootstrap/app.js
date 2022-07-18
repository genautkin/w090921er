const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const images = require('./modules/images');
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));


const path = require("path");

const publicDirectoryPath = path.join(__dirname, "./public");

app.use(express.static(publicDirectoryPath));

const viewsPath = path.join(__dirname,'/templates/views') 
app.set('views', viewsPath)

app.get("" , (req, res) => {
    let _images = images
    if (!!req.query.size) {
        _images=  _images.slice(0, req.query.size)
    }
    res.render("index",{imagesArray: _images});
});

app.get("/form" , (req, res) => {
    console.log(req.query)
    res.render("form");
});

app.post("/form" , (req, res) => {
    console.log(req.body.name);
    res.render("form");
});

// app.get('*', (req, res) => { 
//     res.redirect(303,"/") })



app.listen(PORT, () => {

console.log("Server is up on port "+PORT);
});
