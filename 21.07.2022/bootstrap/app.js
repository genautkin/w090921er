const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const images = require('./modules/images');
const bodyParser = require('body-parser');
const Joi = require('joi');
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
app.get("/item/:ids" , (req, res) => {
    console.log(req.params.ids)
    console.log(req.params.name)
    res.render("index");
});

const contactSchema = Joi.object({
    name: Joi.string().required().min(2).max(70),
    email: Joi.string().required().email(),
    phone: Joi.number().integer().min(9),
    submit: Joi.string()
  });

app.post("/form" , (req, res) => {
    // console.log(req.query)
    // if (req.body.submit === 'contactMe2'){
    //     console.log("Form number 2")
    // }
    // if (req.body.submit === 'contactMe1'){
    //     console.log("Form number 1")
    // }
    // if (req.body.form2){
    //     console.log("Form number 2")
    // }
    const { error, value } = contactSchema.validate(req.body);
    if (error) {
        res.send(error);
    }
    else {
        res.render("form");
    }
    console.log(error);
    //console.log(req.body);

});

// app.get('*', (req, res) => { 
//     res.redirect(303,"/") })



app.listen(PORT, () => {

console.log("Server is up on port "+PORT);
});
