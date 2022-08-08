const express = require('express');
const router = express.Router();
const userSchema = require('../validators/user');
const UserModel = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const _ = require('lodash');
router.post("/create" ,createRequest);

async function createRequest(req, res) {

        const { error, value } = userSchema.newUser.validate(req.body);
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
                        res.status(400).send(err);
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
            user.password = await bcrypt.hash(user.password, saltRounds);
            const savedUser = await new UserModel(user).save();
            resolve(_.pick(savedUser,['email','_id','createdAt','name']));
       } catch (err) {
           reject (err);
       }
    })
    }

    router.post("/auth" ,login);

    async function login(req,res){
        const { error, value } = userSchema.auth.validate(req.body);
        const user = value;
        if (error) {
            res.status(400).send(error)
        }
        else{
            try{
                const userModel = await UserModel.findOne({email:user.email});
                if (!userModel) { 
                    res.status(400).send("Username or password wrong");
                    return;
                }
                const isAuth = await userModel.checkPassword(user.password);
                if (!isAuth) {
                    res.status(400).send("Username or password wrong");
                    return;
                }
                res.status(200).send(userModel.getToken());
            } catch (err) {
                res.status(400).send(err)
            }
        }
    }
    const myPassword = 'aPtdxm7QE5rPLr3^KC!b'
    var jwt = require('jsonwebtoken');
    router.post("/checkToken" ,(req,res)=>{
        const example = { email: "example@example.com", lastLogin: Date.now() };
        try {
            var token = jwt.sign({exp: Math.floor(Date.now() / 1000),data:example}, myPassword);
            res.status(200).send(token);
        }catch  (err) {
            console.log(err);
            res.status(400).send(err);
            return;
        }
    });

    router.post("/decryptToken" ,(req,res)=>{
        try {
            var decoded = jwt.verify(req.body.token, myPassword);
            res.status(200).send(decoded);
        }catch  (err) {
            console.log(err);
            res.status(400).send(err);
            return;
        }
    });
module.exports = router;