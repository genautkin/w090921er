const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/books')
.then( () => console.log('connecting to mongodb!') )
.catch( err => console.error('Could not connect to mongodb', err) );

module.exports = mongoose;