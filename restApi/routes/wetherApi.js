const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.post("/autocomplete" ,createRequest);


async function createRequest(req, res) {

     if (req.body.q) {
        var apiKey = "FU8aSHUdghzGW6CoU6NOAScmZGAVL8gr";
        fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${req.body.q}`)
            .then(_res => _res.json())
            .then(json => {
                console.log("First user in the array:");
                console.log(json);
                res.status(200).json(json);

        })

     } else {
        res.status(400).send("Please provide a q parameter.");
     }
        
    }
    



module.exports = router;