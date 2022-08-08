require('dotenv').config()
const express = require("express");
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
const user = require("./routes/user");
require("./databases/mongoDb");


app.use('/user',user);


app.listen(PORT, () => {
console.log("Server is up on port "+PORT);
    });