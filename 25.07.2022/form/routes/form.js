const express = require('express');
const router = express.Router();
const Joi = require('joi');
const sql = require('../modules/connectToSql');


router.get('/', (req, res) => { 
    res.render("form");
});

const contactSchema = Joi.object({
    name: Joi.string().required().min(2).max(70),
    email: Joi.string().required().email(),
    phone: Joi.number().integer().min(9),
    submit: Joi.string()
  });

  router.post("/" , (req, res) => {
    const { error, value } = contactSchema.validate(req.body);
    if (error) {
        res.send(error);
    }
    else {
        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        const sqlQuery = 'INSERT INTO Persons VALUES (NULL, ?, ?, ?)';
        sql.query(sqlQuery,[name, email, phone],
         function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            console.log(fields);
          });
        res.redirect(303,"form");
    }
});

module.exports = router;