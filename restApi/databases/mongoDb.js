const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/restApi')
.then( () => console.log('connecting to mongodb!') )
.catch( err => console.error('Could not connect to mongodb', err) );

exports.modules = mongoose;
