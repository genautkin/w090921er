const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const images = require('./modules/images');
const Book = require('./modules/mongoDb');
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');

app.use(express.json());


const path = require("path");

const publicDirectoryPath = path.join(__dirname, "./public");

app.use(express.static(publicDirectoryPath));

app.use(function(req, res, next){
    console.log(req.method);
    console.log(req.url);
    next();
    })

const viewsPath = path.join(__dirname,'/templates/views') 
app.set('views', viewsPath)

app.get("" , (req, res) => {
    let _images = images
    if (!!req.query.size) {
        _images=  _images.slice(0, req.query.size)
    }
    res.render("index",{imagesArray: _images});
});

const formRoute = require('./routes/form');
app.use('/form', formRoute);



// app.post("/form" , (req, res) => {
//     const { error, value } = contactSchema.validate(req.body);
//     if (error) {
//         res.send(error);
//     }
//     else {
//         const name = sql.escape(req.body.name);
//         const email = sql.escape(req.body.email);
//         const phone = sql.escape(req.body.phone)
//         sql.query(`INSERT INTO Persons VALUES (NULL, ${name}, ${email}, ${phone});`,
//          function (error, results, fields) {
//             if (error) throw error;
//             console.log(results);
//             console.log(fields);
//           });
//         res.redirect(303,"form");
//     }
// });





app.get("/users", (req, res) => {
    sql.query('SELECT * FROM Persons', function (error, results) {
        if (error) throw error;
        res.render("users",{users: results});
      });
})


// app.get('*', (req, res) => { 
//     res.redirect(303,"/") })


const bookToSave = new Book({title:"HackerU book", pageCount:5});

//Book.find({}).then( books => {books.forEach( book => console.log(book) )}).catch((err) => console.error(err));
bookToSave.save().then((res)=>{console.log(res)}).catch((err)=>console.error(err));


app.listen(PORT, () => {

console.log("Server is up on port "+PORT);
});
