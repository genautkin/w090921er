
 const mongoose = require('mongoose');
module.exports = (req, res, next) => {
    if ((mongoose.connection.readyState) !== 1 ) {
        res.status(500).send('Cant connect to DB');
        return;
    }
    next()
  }
