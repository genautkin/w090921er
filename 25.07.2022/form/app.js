const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const images = require('./modules/images');
const sql = require('./modules/connectToSql');
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
const Joi = require('joi');

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
    res.render("form");
});

const contactSchema = Joi.object({
    name: Joi.string().required().min(2).max(70),
    email: Joi.string().required().email(),
    phone: Joi.number().integer().min(9),
    submit: Joi.string()
  });

app.post("/form" , (req, res) => {
    const { error, value } = contactSchema.validate(req.body);
    if (error) {
        res.send(error);
    }
    else {
        sql.query(`INSERT INTO Persons VALUES (NULL, "${req.body.name}", "${req.body.email}", "${req.body.phone}");`,
         function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            console.log(fields);
          });
        res.redirect(303,"form");
    }
});


app.get("/countries", (req, res) => {
    sql.query('SELECT * FROM countries', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
      });
})

// app.get('*', (req, res) => { 
//     res.redirect(303,"/") })



app.listen(PORT, () => {

console.log("Server is up on port "+PORT);
});
