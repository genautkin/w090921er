const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/books')
.then( () => console.log('connecting to mongodb!') )
.catch( err => console.error('Could not connect to mongodb', err) );


const bookSchema = mongoose.Schema({
    title: {type:String, required:true},
    email: 
    String,
    pageCount: {
        type: Number,
        required: true,
        validate(value){
            if (value <1) {
              throw new Error('page count must be greater than 0');   
            }
         }
    },
    publishedDate: Date,
    thumbnailUrl: String,
    status: String,
    authors: [ String ],
    categories: [ String ]
  });

// create Book model
const Book = mongoose.model('books', bookSchema);


module.exports = Book;