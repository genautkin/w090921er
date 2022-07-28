const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/eshop')
.then( () => console.log('connecting to mongodb!') )
.catch( err => console.error('Could not connect to mongodb', err) );

module.exports