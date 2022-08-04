const express = require('express');
const router = express.Router();
const userSchema = require('../validators/user');
const UserModel = require('../models/user');


router.post("/create" ,createRequest);

async function createRequest(req, res) {

        const { error, value } = userSchema.validate(req.body);
        const user = value;
        if (error) {
            res.status(400).send(error)
        }
        else {
            try {
                const result = await UserModel.find({email:user.email});
                if (result.length > 0) {
                    res.status(400).send("User already exists")
                }
                else {
                    try {
                     const savedUser = await saveUser(user);
                     res.status(201).send(savedUser);
                    }
                    catch (err) {
                        res.status(400).send(400);
                    }
                    
                }
            } catch (err) {
                res.status(400).send(err)
            }
        
        }
    }
    


 function saveUser(user){
    return new Promise(async (resolve, reject) => {
        try {
            const savedUser = await new UserModel(user).save();
            resolve(savedUser);
       } catch (err) {
           reject (err);
       }
    })
    }

router.get("/create" , (req, res) => {
   res.send("Hi");
});

module.exports = router;